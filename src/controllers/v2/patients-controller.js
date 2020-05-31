const patientsModel = require('../../models/patients-model');

const createPatient = async (req, res) => {
  try {
    // capturo los datos del body
    await patientsModel.createPatient(req.body);
    res.status(200).send({ status: 'OK', message: 'patient created' });
  } catch (error) {
    // el isguiente if es para no mostrar el error de mongo
    if (error.code && error.code === 11000) {
      res
        .status(400)
        .send({ status: 'DUPLICATED_VALUES', message: error.keyValue });
      return;
    }
    // console.log('error createuser', error);
    res.status(500).send({ status: 'ERROR', message: error.message });
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await patientsModel.getPatients();
    // 0 excluir y 1 incluir
    res.send({ status: 'OK', data: patients });
  } catch (e) {
    res.status(500).send({ status: 'ERROR', message: e.message });
  }
};
module.exports = { getPatients, createPatient };
