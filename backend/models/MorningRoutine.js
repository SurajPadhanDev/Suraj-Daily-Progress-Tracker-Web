const mongoose = require('mongoose');

const MorningRoutineSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  status: { type: Boolean, default: false },
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MorningRoutine', MorningRoutineSchema);
