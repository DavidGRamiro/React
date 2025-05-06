const { response} = require('express')
const { validationResult } = require('express-validator')

const validarCampos = (request, res = response, next) => {

  const { name, email, password} = request.body

  const errores = validationResult(request)
  if(!errores.isEmpty()){
    return res.status(400).json({
      ok: false,
      errores: errores.mapped()
    })
  }

  next()

}

module.exports = { validarCampos }