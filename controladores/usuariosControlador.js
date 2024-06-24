const Usuario = require('../modelos/Usuario');

// Crear nuevo usuario
exports.crearUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).send({ message: 'Usuario creado exitosamente', usuario });
  } catch (error) {
    res.status(400).send({ message: 'Error al crear el usuario', error });
  }
};

// Obtener todos los usuarios
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).send({ message: 'Usuarios obtenidos exitosamente', usuarios });
  } catch (error) {
    res.status(400).send({ message: 'Error al obtener los usuarios', error });
  }
};
