
const express = require('express')
const cors = require('cors')

const { dbConnection } = require('./database/config')


//Creamos el servidor de express
const app = express()

// Base de datos
dbConnection()

// CORS
app.use(cors())

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