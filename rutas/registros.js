const express = require('express');
const router = express.Router();
const registrosControlador = require('../controladores/registrosControlador');

router.post('/', registrosControlador.crearRegistro);
router.get('/', registrosControlador.obtenerRegistros);

module.exports = router;
