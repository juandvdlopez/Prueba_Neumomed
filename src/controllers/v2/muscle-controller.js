const musclesDataModel = require('../../models/muscle-data-model');
const patientsModel = require('../../schemes/patients');
const musclesModel = require('../../schemes/muscles');

const linkMuscle = async (req, res) => {
  try {
    const { patientId } = req.body.patient;
    const { muscleName } = req.body;

    const isPatient = await patientsModel.find({ _id: patientId });
    const isMuscle = await musclesModel.find({ name: muscleName });

    if (isPatient.length !== 0 && isMuscle.length !== 0) {
      await musclesDataModel.linkMuscle(req.body);
      res.status(200).send({ status: 'MUSCLE DATA CREATED' });
    } else {
      res.status(400).send({ status: 'PATIENT OR MUSCLE NOT FOUND' });
    }
  } catch (error) {
    // console.log('error createuser', error);
    res.status(500).send({ status: 'ERROR', message: error.message });
  }
};

module.exports = { linkMuscle };
