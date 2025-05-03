


const express = require('express')

//Creamos el servidor de express
const app = express()

// Escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor en puerto ${4000}`)
} )

// Rutas
app.get('/', (request, response) => {

  response.json({
    ok:true,
  })
})