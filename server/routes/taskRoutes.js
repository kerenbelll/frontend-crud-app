// server/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Importa el modelo de Task

// Ruta para crear una nueva tarea (CREATE)
router.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body); // Crear una nueva tarea con los datos del cuerpo de la solicitud
    await newTask.save();               // Guardar la tarea en la base de datos
    res.status(201).json(newTask);      // Responder con la tarea creada
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para leer todas las tareas (READ)
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();   // Buscar todas las tareas
    res.json(tasks);                   // Responder con las tareas
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar una tarea (UPDATE)
router.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para eliminar una tarea (DELETE)
router.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id); // Buscar y eliminar la tarea
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
