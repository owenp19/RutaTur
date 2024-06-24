const express = require('express');
const router = express.Router();
const rutasTuristicasControlador = require('../controladores/rutasTuristicasControlador');
const multer = require('multer');
const path = require('path');

// Configuración de multer para guardar los archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.fields([{ name: 'documento', maxCount: 1 }, { name: 'imagenRuta', maxCount: 1 }]), rutasTuristicasControlador.crearRutaTuristica);
router.get('/', rutasTuristicasControlador.obtenerRutasTuristicas);

module.exports = router;

