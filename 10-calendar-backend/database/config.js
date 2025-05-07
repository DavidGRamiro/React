const mongoose = require('mongoose')

const dbConnection = async() => {
  try{

    await mongoose.connect('mongodb+srv://david:hzF7x78z3v4E9vou@jpurnal-db.iy2yncu.mongodb.net/mern_calendar');
    console.log('DB ONLINE')

  }catch (error){
    console.lof(error)
    throw new Error('Error al inicializar la Base de datos.')
  }
}

module.exports= { dbConnection }