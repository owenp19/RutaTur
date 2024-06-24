const Contacto = require('../modelos/Contacto');

// Crear nuevo contacto
exports.crearContacto = async (req, res) => {
  try {
    const contacto = new Contacto(req.body);
    await contacto.save();
    res.status(201).send({ message: 'Contacto creado exitosamente', contacto });
  } catch (error) {
    res.status(400).send({ message: 'Error al crear el contacto', error });
  }
};

// Obtener todos los contactos
exports.obtenerContactos = async (req, res) => {
  try {
    const contactos = await Contacto.find();
    res.status(200).send({ message: 'Contactos obtenidos exitosamente', contactos });
  } catch (error) {
    res.status(400).send({ message: 'Error al obtener los contactos', error });
  }
};
