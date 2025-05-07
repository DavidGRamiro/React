const jwt = require('jsonwebtoken')

const generarJWT = (uid, name) => {
  return new Promise((resolve, reject) => {

    const payload = {  uid, name }
    jwt.sign(payload, 'Palabra-secreta-key', {
      expiresIn: '2h'
    }, (err, token) => {
      // Si ha habido un error salimos de la promesa con reject
      if(err){
        console.log(err)
        reject('No se pudo generar el token')
      }
      // SI ha sido OK reolvemos y devolvemos el token
      resolve(token)
    })
  })
}

module.exports = { generarJWT }