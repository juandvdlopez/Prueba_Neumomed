const express = require('express');
const exercisesController = require('../../controllers/v2/exercises-controller');

const router = express.Router(); // funcion para crear rutas tipo get, post, delete
// Definición de endpoints
//Ruta para consultar registros de un paciente
router.get('/patient/:patientId', exercisesController.getExercisesByPatient);
//ruta para consultar registros de un músculo particular
router.get('/muscle', exercisesController.getExercisesByMuscle);
//Ruta para generar un reporte de ejercicios
router.post('/new-report', exercisesController.createReport);
//Ruta para reporte promedio de ejercicios basados en potencia muscular
router.get('/get_average_exercise', exercisesController.exerciseReportLimit);

module.exports = router;
