
const express = require('express')
//Creamos el servidor de express
const app = express()

//Directorio publico
app.use(express.static('public'))

//Lectura y parseo del body
app.use(express.json())

// Escuchar peticiones
app.listen( 4000, () => {
  console.log(`Servidor en puerto ${ 4000 }`)
} )

// Rutas
app.use('/api/auth', require('./routes/auth'))