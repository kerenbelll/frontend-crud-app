// server.js en la carpeta 'server'

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/items'); // Asegúrate de que el nombre del archivo y la ruta coincidan

dotenv.config().parsed
console.log( dotenv )


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/items', itemRoutes); // Ruta para los endpoints de 'items'

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
