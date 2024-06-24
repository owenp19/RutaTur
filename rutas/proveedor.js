const express = require('express');
const router = express.Router();
const proveedorControlador = require('../controladores/proveedorControlador');

router.get('/', proveedorControlador.obtenerProveedores);

module.exports = router;
