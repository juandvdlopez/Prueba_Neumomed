const MusclesData = require('../schemes/muscle-data');

// Acceso a colección para asignar músculo en controlador
const linkMuscle = async (newmusclesData) => {
  const muscleData = new MusclesData(newmusclesData);
  const answerCreated = await muscleData.save();
  return answerCreated;
};

module.exports = { linkMuscle };
