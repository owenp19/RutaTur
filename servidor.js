const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/rutaturDB')
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log(err));

// Servidor archivos estáticos
app.use(express.static(path.join(__dirname, 'publico')));

// Ruta principal
app.get('/', (req, res) => {
res.sendFile(__dirname + "inicio.html")
});

// Importar rutas
const rutasAdmin = require('./rutas/admin');
const rutasUsuarios = require('./rutas/usuarios');
const rutasRegistros = require('./rutas/registros');
const rutasContacto = require('./rutas/contacto');
const rutasTuristicas = require('./rutas/rutasTuristicas');
const rutasReservas = require('./rutas/reservas');
const rutasProveedor = require('./rutas/proveedor');
const rutasRegistroProveedor = require('./rutas/registroProveedor');

// Usar rutas
app.use('/api/admin', rutasAdmin); 
app.use('/api/usuarios', rutasUsuarios);
app.use('/api/registros', rutasRegistros);
app.use('/api/contacto', rutasContacto);
app.use('/api/rutasTuristicas', rutasTuristicas);
app.use('/api/reservas', rutasReservas);
app.use('/api/proveedor', rutasProveedor);
app.use('/api/registroProveedor', rutasRegistroProveedor);


// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de reservas de rutas turísticas Rutatur');
});

const PUERTO = process.env.PORT || 5000;
app.listen(PUERTO, () => console.log(`Servidor corriendo en el puerto http://localhost:${PUERTO}`));




