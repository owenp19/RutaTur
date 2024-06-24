const express = require('express');
const router = express.Router();
const reservasControlador = require('../controladores/reservasControlador');

router.post('/', reservasControlador.crearReserva);
router.get('/', reservasControlador.obtenerReservas);

module.exports = router;
