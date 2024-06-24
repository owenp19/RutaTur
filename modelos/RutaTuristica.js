// modelos/RutaTuristica.js
const mongoose = require('mongoose');

const RutaTuristicaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  duracion: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  documento: {
    type: String,
    required: true
  },
  imagenRuta: {
    type: String,
    required: true
  },
  tipoRuta: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('RutaTuristica', RutaTuristicaSchema);


