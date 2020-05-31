const mongoose = require('mongoose');

const { Schema } = mongoose;
// definición de Schema para colección muscle data
const muscleDataSchema = new Schema({
  patient: {
    patientId: { type: String },
    name: { type: String },
    document: { type: String },
  },
  muscleName: { type: String, required: true }, // validación
  crossSection: { type: Number, required: true },
  healthy: { type: Boolean, required: true },
});

const model = mongoose.model('MuscleData', muscleDataSchema, 'muscleData');
module.exports = model;
