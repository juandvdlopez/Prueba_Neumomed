const express = require('express');
const muscleController = require('../../controllers/v2/muscle-controller');

const router = express.Router(); // funcion para crear rutas tipo get, post, delete

// Ruta para vincular información de un músculo a un paciente
router.post('/add-muscle', muscleController.linkMuscle);

module.exports = router;
