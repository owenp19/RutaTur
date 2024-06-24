const Proveedor = require('../modelos/Proveedor');

// Obtener todos los proveedores
exports.obtenerProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.status(200).send({ message: 'Proveedores obtenidos exitosamente', proveedores });
  } catch (error) {
    res.status(400).send({ message: 'Error al obtener los proveedores', error });
  }
};

