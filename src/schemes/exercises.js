const mongoose = require('mongoose');

const { Schema } = mongoose;
// definición de Schema para colección exercises
const exerciseSchema = new Schema({
  exerciseName: { type: String, required: true }, // validación
  time: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: String, required: true },
});

const model = mongoose.model('Exercise', exerciseSchema, 'exercises');
module.exports = model;
