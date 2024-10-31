// server/models/item.js

const mongoose = require('mongoose');

// Definimos el esquema del Item
const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true // Añade createdAt y updatedAt automáticamente
});

// Exportamos el modelo para que podamos utilizarlo en otras partes de la aplicación
module.exports = mongoose.model('Item', itemSchema);
