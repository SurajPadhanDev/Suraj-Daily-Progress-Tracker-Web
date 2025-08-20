const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  type: String,
  completed: { type: Boolean, default: false },
  duration: Number,
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
