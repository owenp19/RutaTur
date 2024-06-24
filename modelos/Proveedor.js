const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
    unique: true
  },
  contraseña: {
    type: String,
    required: true
  },
  tipo_proveedor: {
    type: String,
    required: true
  },
  codigo_proveedor: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);

