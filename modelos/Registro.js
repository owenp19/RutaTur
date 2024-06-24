const mongoose = require('mongoose');

const RegistroSchema = new mongoose.Schema({
  nombreCompleto: String,
  nombreUsuario: {
    type: String,
    required: true,
    unique: true
  },
  correoElectronico: {
    type: String,
    required: true,
    unique: true
  },
  telefonoCelular: String,
  contraseña: String,
  confirmarContraseña: String,
  genero: String
});

module.exports = mongoose.model('Registro', RegistroSchema);
