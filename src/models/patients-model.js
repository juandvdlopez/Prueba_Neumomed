//Importación del esquema de pacientes
const Patient = require('../schemes/patients');

//Acceso a la base de datos
//Función para crear un nuevo paciente
const createPatient = async (newPatientData) => {
  const patient = new Patient(newPatientData);
  const answerCreated = await patient.save();
  return answerCreated;
};
//Funcion para obtener paciente
const getPatients = async () => {
  const patients = await Patient.find().select(
    '_id name document'
  );
  return patients;
};

//Se exporta el modelo para ser usado en el controlador
module.exports = {
  getPatients,
  createPatient,
};
