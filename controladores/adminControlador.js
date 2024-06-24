const Admin = require('../modelos/admin');

// Obtener todos los admins
exports.obtenerAdmin = async (req, res) => {
  try {
    const admin = await Admin.find();
    res.status(200).send({ message: 'Admins obtenidos exitosamente', admin });
  } catch (error) {
    res.status(400).send({ message: 'Error al obtener los admins', error });
  }
};
