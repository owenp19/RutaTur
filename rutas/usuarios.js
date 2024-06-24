const express = require('express');
const router = express.Router();
const usuariosControlador = require('../controladores/usuariosControlador');

router.post('/', usuariosControlador.crearUsuario);
router.get('/', usuariosControlador.obtenerUsuarios);

module.exports = router;
