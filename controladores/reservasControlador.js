const Reserva = require('../modelos/Reserva');

// Crear nueva reserva
exports.crearReserva = async (req, res) => {
  try {
    const reserva = new Reserva(req.body);
    await reserva.save();
    res.status(201).send({ message: 'Reserva creada exitosamente', reserva });
  } catch (error) {
    res.status(400).send({ message: 'Error al crear la reserva', error });
  }
};

// Obtener todas las reservas
exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.status(200).send({ message: 'Reservas obtenidas exitosamente', reservas });
  } catch (error) {
    res.status(400).send({ message: 'Error al obtener las reservas', error });
  }
};
