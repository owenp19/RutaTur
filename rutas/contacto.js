const express = require('express');
const router = express.Router();
const contactoControlador = require('../controladores/contactoControlador');

router.post('/', contactoControlador.crearContacto);
router.get('/', contactoControlador.obtenerContactos);

module.exports = router;
