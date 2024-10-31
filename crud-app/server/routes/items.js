const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Crear un nuevo ítem
router.post('/', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Leer todos los ítems
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un ítem
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un ítem
router.delete('/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ message: 'Ítem eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
