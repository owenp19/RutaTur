const RutaTuristica = require('../modelos/RutaTuristica');
const path = require('path');

// Crear nueva ruta turística con archivos
exports.crearRutaTuristica = async (req, res) => {
  try {
    const rutaTuristica = new RutaTuristica({
      nombre: req.body.nombre,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      duracion: req.body.duracion,
      ubicacion: req.body.ubicacion,
      documento: req.files.documento[0].filename,
      imagenRuta: req.files.imagenRuta[0].filename,
      tipoRuta: req.body.tipoRuta
    });
    await rutaTuristica.save();
    res.status(201).send({ message: 'Ruta turística creada exitosamente', rutaTuristica });
  } catch (error) {
    res.status(400).send({ message: 'Error al crear la ruta turística', error });
  }
};

// Obtener todas las rutas turísticas
exports.obtenerRutasTuristicas = async (req, res) => {
  try {
    const rutasTuristicas = await RutaTuristica.find();
    res.status(200).send({ message: 'Rutas turísticas obtenidas exitosamente', rutasTuristicas });
  } catch (error) {
    res.status(400).send({ message: 'Error al obtener las rutas turísticas', error });
  }
};
