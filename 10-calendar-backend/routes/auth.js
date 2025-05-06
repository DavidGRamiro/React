
// RUTAS DE USUARIOS

const { Router  } = require('express')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { check }  = require('express-validator')
const { validarCampos } = require('../middlewares/valdar-campos')
const router = Router()

router.post('/new',
  [ //midlleware
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
    validarCampos
  ],
  crearUsuario)
router.post('/', 
  [ //midlleware
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
    validarCampos
  ],
  loginUsuario)
router.get('/renew', revalidarToken)




module.exports = router