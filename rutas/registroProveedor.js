const express = require('express');
const router = express.Router();
const registroProveedorControlador = require('../controladores/registroproveedorControlador');

router.post('/', registroProveedorControlador.crearRegistroProveedor);
router.get('/', registroProveedorControlador.obtenerRegistrosProveedor);

module.exports = router;

