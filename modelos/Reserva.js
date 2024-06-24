const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true
  },
  telefonoCelular: {
    type: String,
    required: true
  },
  correoElectronico: {
    type: String,
    required: true
  },
  rutaTuristica: {
    type: String, 
    required: true
  },
  numeroDePersonas: {
    type: Number,
    required: true
  },
  fechaDeReserva: {
    type: Date,
    required: true
  },
  preferenciasDeAlimentacion: {
    type: String,
    required: false
  },
  enfermedades: {
    type: String,
    required: false
  },
  contactoDeEmergencia: {
    type: String,
    required: true
  },
  tipoDePago: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model('Reserva', ReservaSchema);

