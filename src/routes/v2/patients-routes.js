const express = require('express');
const patientsController = require('../../controllers/v2/patients-controller');

const router = express.Router(); // funcion para crear rutas tipo get, post, delete
//Ruta para crear pacientes nuevos
router.post('/create', patientsController.createPatient); // funcion create para  pacientes
//Ruta para obtener pacientes
router.get('/get', patientsController.getPatients); //  ensayo
module.exports = router;
