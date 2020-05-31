//Importación del esquema de pacientes
const exercisesData = require('../schemes/exercises-data');
const ExercisesData = require('../schemes/exercises-data');
//A continuación se definen acceso a la base de datos que serán invocadas
// en el correspondiente controlador

const getExercises = async () => {
  const exercises = await exercisesData.find();
  return exercises;
};

const getExercisesByPatient = async (req) => {
  const { patientId } = req.params;
  const exercises = await exercisesData.find({
    'paciente.patientId': patientId,
  });
  return exercises;
};

const getExercisesByMuscle = async (data) => {
  const { patientId } = data;
  const { muscleId } = data;

  const exercises = exercisesData.find({
    'paciente.patientId': patientId,
    'paciente.muscleId': muscleId,
  });
  // .find()
  // .populate('paciente', (' document', { $eq: '123' }));

  return exercises;
  //return data;
};

const createReport = async (newexercisesData) => {
  const exerciseData = new ExercisesData(newexercisesData);
  const answerCreated = await exerciseData.save();
  return answerCreated;
};
const getExerciseReportLimit = async (query, limit) => {
  const answer = await exercisesData
    .find(query)
    .sort({ date: -1 })
    .limit(Number(limit))
    .select({ _id: 0, voltage: 1 });
  return answer;
};
//Se exporta el modelo para ser usado en el controlador
module.exports = {
  getExercises,
  getExercisesByPatient,
  getExercisesByMuscle,
  createReport,
  getExerciseReportLimit,
};
