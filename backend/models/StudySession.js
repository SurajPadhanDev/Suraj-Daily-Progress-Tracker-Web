const mongoose = require('mongoose');

const StudySessionSchema = new mongoose.Schema({
  sessionNumber: Number,
  startTime: Date,
  endTime: Date,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('StudySession', StudySessionSchema);
