// server/models/Task.js
const mongoose = require('mongoose');

// Define la estructura de una tarea
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Título de la tarea, es obligatorio
  description: { type: String },            // Descripción de la tarea, opcional
  completed: { type: Boolean, default: false } // Estado de la tarea, por defecto es "no completada"
});

// Crear el modelo basado en el esquema
const Task = mongoose.model('Task', taskSchema);

// Exportar el modelo para usarlo en otras partes del código
module.exports = Task;
