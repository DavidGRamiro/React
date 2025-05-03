const { response } = require('express')

const crearUsuario  = (request, res = response) => {  

  const { name, email, password} = request.body
  

  res.json ({
    ok:true,
    msg:'registro',
    name, email, password
  })
}

const loginUsuario = (request, res=response) => {
  const { email, password} = request.body

  res.json ({
    ok:true,
    msg:'login',
    name , password
  })
}

const revalidarToken = (resquet, res=response) => {
  res.json ({
    ok:true,
    msg:'revalidar token'
  })
}


module.exports = { crearUsuario, loginUsuario, revalidarToken }