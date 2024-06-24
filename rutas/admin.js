const express = require('express');
const router = express.Router();
const adminControlador = require('../controladores/adminControlador');

router.get('/', adminControlador.obtenerAdmin);

module.exports = router;
