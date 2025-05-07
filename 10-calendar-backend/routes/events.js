const { Router  } = require('express')
const { obtenerEventos, crearEvento, actualizarEvento, deleteEvento } = require('../controllers/events')
const { validarJWT } = require('../middlewares/validar-jwt')
const { check} = require('express-validator')
const { validarCampos } = require('../middlewares/valdar-campos')
const { isDate } = require('../helpers/isDate')
const router = Router()


// Obtener los eventos.
router.get('/', validarJWT, obtenerEventos)

// Crear evento
router.post('/',
  [
    check('title','Titulo obligatorio').not().isEmpty(),
    check('start','Fecha de inicio obligatoria').custom( isDate ),
    check('end','Fecha de inicio obligatoria').custom( isDate ),
    validarCampos
  ], 
  validarJWT, 
  crearEvento)

//Actualizar evento
router.put('/:id', validarJWT, actualizarEvento)

// Eliminar eventos
router.delete('/:id', validarJWT, deleteEvento)


module.exports = router




