const mongoose = require('mongoose');

const RegistroProveedorSchema = new mongoose.Schema({
  nombreEmpresa: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true,
    unique: true
  },
  correoElectronico: {
    type: String,
    required: true
  },
  telefonoCelular: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  },
  tipoNegocio: {
    type: String,
    required: true
  },
  confirmaContraseña: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('RegistroProveedor', RegistroProveedorSchema);
