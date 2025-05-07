const { response } = require('express')
const Usuario = require('../models/Usuario')
const bycrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')

//Creacion de un nuevo usuario
const crearUsuario  = async(request, res = response) => {  
  try{
  
    const { email, password  } = request.body
    let usuario =  await Usuario.findOne({ email })
    
    // Validaciones si existe ese usuario en BBDD
    if(usuario){
      return res.status(400).json({
        ok:false,
        msg: 'Usuario ya existente con ese correo electronico'
      })
    }
    // SI no existe lo grabamos en BBDD
    usuario = new Usuario(request.body)
    // Encriptar password
    const salt = bycrypt.genSaltSync();
    usuario.password = bycrypt.hashSync( password, salt);
    await usuario.save()

    // Generar JWT
    const token = await generarJWT(usuario.id, usuario.name)

    res.status(201).json ({
      ok:true,
      uid : usuario.id,
      name: usuario.name,
      token
    })
  }
  catch (error){
    res.status(500).json({
      ok:false,
      msg: ' Por favor, hable con el administrador'
    })
  }
}

// Hacer login del usuario
const loginUsuario = async(request, res=response) => {
  const { email, password } = request.body
  try{
    const usuario =  await Usuario.findOne({ email })
    // SI el usuario no se encuentra.
    if(!usuario){
      return res.status(400).json({
        ok:false,
        msg: 'Usuario no existe con ese email'
      })
    }

    // Confirmar los password
    const validPassword = bycrypt.compareSync(password, usuario.password)
    if(!validPassword){
      return res.status(400).json({
        ok:false,
        msg: 'Password no valida'
      })
    }

    // Generamos el JWEB TOKEN
    const token = await generarJWT(usuario.id, usuario.name)
    
    res.status(200).json({
      ok:true,
      uid: usuario.id,
      name: usuario.name,
      token 
    })

  }catch(error){
    res.status(500).json({
      ok:false,
      msg: 'Por favor, hable con el administrador'
    })
  }
}

// Renovar el JWT
const revalidarToken = async(resquet, res=response) => {
  const {uid, name} = resquet

  // Generamos un nuevo web token y retornamos el token
  const token = await generarJWT(uid, name)

  res.json ({
    ok:true,
    token
  })
}


module.exports = { crearUsuario, loginUsuario, revalidarToken }