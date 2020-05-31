const mongoose = require('mongoose');

const { Schema } = mongoose;
// definición de Schema para colección muscle
const muscle = new Schema({
  name: { type: String, required: true },
});

const model = mongoose.model('Muscle', muscle, 'muscles');
module.exports = model;
