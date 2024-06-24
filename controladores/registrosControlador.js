const Registro = require('../modelos/Registro');

// Crear nuevo registro
exports.crearRegistro = async (req, res) => {
  try {
    const registro = new Registro(req.body);
    await registro.save();
    res.status(201).send({ message: 'Registro creado exitosamente', registro });
  } catch (error) {
    res.status(400).send({ message: 'Error al crear el registro', error });
  }
};

// Obtener todos los registros
exports.obtenerRegistros = async (req, res) => {
  try {
    const registros = await Registro.find();
    res.status(200).send({ message: 'Registros obtenidos exitosamente', registros });
  } catch (error) {
    res.status(400).send({ message: 'Error al obtener los registros', error });
  }
};
