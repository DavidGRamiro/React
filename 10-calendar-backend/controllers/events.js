const { response } = require('express')


const obtenerEventos = (req, res=response) => {
  return res.status(200).json({
    ok: true,
    msg: 'getEventos'
  })
}

const crearEvento = (req, res=response) => {

  

  return res.status(201).json({
    ok: true,
    msg: 'crearEvento'
  })
}

const actualizarEvento = (req, res=response) => {
  return res.status(200).json({
    ok: true,
    msg: 'actualizarEvento'
  })
}

const deleteEvento = (req, res=response) => {
  return res.status(200).json({
    ok: true,
    msg: 'eliminarEvento'
  })
}

module.exports = { obtenerEventos, crearEvento, actualizarEvento, deleteEvento }