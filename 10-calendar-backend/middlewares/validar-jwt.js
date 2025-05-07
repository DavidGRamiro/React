const { response} = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (request, res = response, next) => {

  const token = request.header('x-token')
  
  if(!token){
    return res.status(404).json({
      ok: false,
      msg: 'No existe el token'
    })
  }

  try{

    const { uid, name }  = jwt.verify(token, 'Palabra-secreta-key')
    request.uid = uid
    request.name = name
    
  }catch(error){
    return res.status(401).json({
      ok:false,
      msg: 'Token no valido'
    })
  }

  next()
}



module.exports = { validarJWT }