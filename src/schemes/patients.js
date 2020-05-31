const mongoose = require('mongoose');

const { Schema } = mongoose;
// definición de Schema para colección Patiens
const patientSchema = new Schema({
  name: { type: String, required: true, unique: false }, // validación
  age: { type: Number, required: true, unique: false },
  gender: { type: String, required: true },
  contactNumber: { type: String, required: true }, //validar solo número
  document: { type: String, required: true, unique: true }, //validar solo número
  admissionDate: { type: Number, required: true }, // colocar el default now
  //role: { type: String, enum: ['admin', 'seller'], default: 'seller' },
});

const Patient = mongoose.model('Patient', patientSchema, 'patients');
module.exports = Patient;
