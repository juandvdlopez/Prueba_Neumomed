const exercisesDataModel = require('../../models/exercises-data-model');
const patientsModel = require('../../schemes/patients');
const musclesModel = require('../../schemes/muscles');

//Función para obtener registro ejercicios
const getExercises = async (req, res) => {
  try {
    const exercises = await exercisesDataModel.getExercises();
    res.send({ status: 'OK', data: exercises });
  } catch (e) {
    //console.log('deleteProduct error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};
//función para obtener registro por pacientes
const getExercisesByPatient = async (req, res) => {
  try {
    const exercises = await exercisesDataModel.getExercisesByPatient(req);
    const total = exercises.length;
    res.status(200).send({ status: 'OK', total, data: exercises });
  } catch (e) {
    res.status(500).send({ status: 'ERROR', message: e.message });
  }
};
//función para obtener registro por músculo
const getExercisesByMuscle = async (req, res) => {
  try {
    const exercises = await exercisesDataModel.getExercisesByMuscle(req.body);
    const total = exercises.length;
    res.status(200).send({ status: 'OK', total, data: exercises });
  } catch (e) {
    res.status(500).send({ status: 'ERROR', message: e.message });
  }
};
//función para crear nuevo reporte
const createReport = async (req, res) => {
  try {
    const { patientId } = req.body.paciente;
    const { muscleId } = req.body.paciente;
    const { exerciseId } = req.body.exercise;

    const isPatient = await patientsModel.find({ _id: patientId });
    const isMuscle = await musclesModel.find({ _id: muscleId });
    const isExercise = await musclesModel.find({ _id: exerciseId });

    if (isPatient.length !== 0 && isMuscle.length !== 0 && isExercise !== 0) {
      await exercisesDataModel.createReport(req.body);
      res.status(200).send({ status: 'EXERCISE DATA CREATED' });
    } else {
      res.status(400).send({ status: 'PATIENT, MUSCLE OR EXERCISE NOT FOUND' });
    }
  } catch (error) {
    res.status(500).send({ status: 'ERROR', message: error.message });
  }
};
//Función para calcular el promedio de los voltajes
const averageVoltage = (exercisesWhitLimit) => {
  const voltageValue = exercisesWhitLimit.map((Element) => Element.voltage);
  // eslint-disable-next-line no-return-assign
  const sum = voltageValue.reduce((previous, current) => (current += previous));
  const avg = sum / voltageValue.length;
  return avg;
};

//Función para obtener el reporte promedio
const exerciseReportLimit = async (req, res) => {
  const query = {};
  if (req.query.standard === 'muscle') {
    const standard = `paciente.${req.query.standard}`;
    query[standard] = req.query.value;
  } else if (req.query.standard === 'name') {
    const standard = `exercise.${req.query.standard}`;
    query[standard] = req.query.value;
  } else {
    res.status(400).json({ message: 'Parametro de comparación no valido' });
  }
  query['paciente.document'] = req.query.document;
  const exercisesWhitLimit = await exercisesDataModel.getExerciseReportLimit(
    query,
    req.query.limit
  );
  res.status(200).json({
    message: 'Ejercicios en periodo determinado',
    data: averageVoltage(exercisesWhitLimit),
  });
};

module.exports = {
  getExercises,
  getExercisesByPatient,
  getExercisesByMuscle,
  createReport,
  exerciseReportLimit,
};
