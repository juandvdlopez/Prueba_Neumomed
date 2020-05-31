const mongoose = require('mongoose');

const { Schema } = mongoose;
// definición de Schema para colección exercisesData
const exerciseDataSchema = new Schema(
  {
    voltage: { type: Number },
    trueTime: { type: Number },
    trueSets: { type: Number },
    trueReps: { type: Number },
    trueWeight: { type: String },
    complete: { type: Boolean },
    observacion: { type: String },
    paciente: {
      patientId: { type: String },
      name: { type: String },
      document: { type: String },
      muscle: { type: String },
      muscleId: { type: String },
    },
    exercise: {
      name: { type: String },
      exerciseId: { type: String },
    },
  },
  {
    timestamps: true, //
  }
);

const model = mongoose.model(
  'ExerciseData',
  exerciseDataSchema,
  'exercisesData'
);
module.exports = model;
