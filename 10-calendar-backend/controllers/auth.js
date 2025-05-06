const { response } = require('express')
const crearUsuario  = (request, res = response) => {  

  res.json ({
    ok:true,
    msg:'registro',
    name, email, password
  })
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