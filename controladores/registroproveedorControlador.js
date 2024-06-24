const RegistroProveedor = require('../modelos/registroproveedor');

// Crear nuevo registro de proveedor
exports.crearRegistroProveedor = async (req, res) => {
  try {
    const registroProveedor = new RegistroProveedor(req.body);
    await registroProveedor.save();
    res.status(201).send({ message: 'Registro de proveedor creado exitosamente', registroProveedor });
  } catch (error) {
    res.status(400).send({ message: 'Error al crear el registro de proveedor', error });
  }
};

// Obtener todos los registros de proveedores
exports.obtenerRegistrosProveedor = async (req, res) => {
  try {
    const registrosProveedor = await RegistroProveedor.find();
    res.status(200).send({ message: 'Registros de proveedores obtenidos exitosamente', registrosProveedor });
  } catch (error) {
    res.status(400).send({ message: 'Error al obtener los registros de proveedores', error });
  }
};

