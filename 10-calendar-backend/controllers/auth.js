const { response } = require('express')
const Usuario = require('../models/Usuario')


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
    await usuario.save()

    res.status(201).json ({
      ok:true,
      uid : usuario.id,
      name: usuario.name
    })
  }
  catch (error){
    res.status(500).json({
      ok:false,
      msg: ' Por favor, hable con el administrador'
    })
  }
}

const loginUsuario = (request, res=response) => {
  
  res.json ({
    ok:true,
    msg:'login',
  })
}

const revalidarToken = (resquet, res=response) => {
  res.json ({
    ok:true,
    msg:'revalidar token'
  })
}


module.exports = { crearUsuario, loginUsuario, revalidarToken }