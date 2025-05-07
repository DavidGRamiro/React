const { response } = require('express')
const Usuario = require('../models/Usuario')


const crearUsuario  = async(request, res = response) => {  
  try{
    const usuario = new Usuario(request.body)
    await usuario.save()

    res.status(201).json ({
      ok:true,
      msg:'registro',
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