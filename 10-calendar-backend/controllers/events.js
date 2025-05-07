const { response } = require('express')
const Evento = require('../models/Evento')

// Obtener todos los eventos.
const obtenerEventos = async(req, res=response) => {
  
  const eventos = await Evento.find().populate('user', 'name')

  return res.status(200).json({
    ok: true,
    eventos
  })
}

// Crear un nuevo evento
const crearEvento = async(req, res=response) => {

  const evento = new Evento( req.body)
  try{
    evento.user = req.uid
    const eventoGuardado = await evento.save()
    
    return res.json({
      ok:true,
      eventoGuardado
    })
  }catch(error){
    return res.status(500).json({
      ok:false,
      msg:'Hable con el admin'
    })
  }

}

// Actualizacion de evento
const actualizarEvento = async(req, res=response) => {
  const eventoId = req.params.id
  const uid = req.uid
  try {
    const evento = await Evento.findById(eventoId)
    if(!evento){
      res.status(404).json({
        ok:false,
        msg:'No existe ese evento'
      })
    }

    if(evento.user.toString() !== uid){
      res.status(401).json({
        ok:false,
        msg:'No puedes eliminar este evento'
      })
    }

    const nuevoEvento = { ...req.body, user : uid}
    const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, { new: true})

    res.status(200).json({
      ok:true,
      eventoActualizado
    })


  } catch (error) {
    res.status(500).json({
      ok:false,
      msg:'Hable con el administrador'
    })
  }
  
}

const deleteEvento =  async(req, res=response) => {

  const eventoId = req.params.id
  const uid = req.uid
  try {
    const evento = await Evento.findById(eventoId)
    if(!evento){
      return res.status(404).json({
        ok:false,
        msg:'No existe ese evento'
      })
    }

    if(evento.user.toString() !== uid){
      return res.status(401).json({
        ok:false,
        msg:'No puedes eliminar este evento'
      })
    }

    await Evento.findByIdAndDelete(eventoId)

    res.status(200).json({
      ok:true,
    })


  } catch (error) {
    res.status(500).json({
      ok:false,
      msg:'Hable con el administrador'
    })
  }
  
  
  return res.status(200).json({
    ok: true,
    msg: 'eliminarEvento'
  })
}

module.exports = { obtenerEventos, crearEvento, actualizarEvento, deleteEvento }