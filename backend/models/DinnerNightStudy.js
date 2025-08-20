const mongoose = require('mongoose');

const DinnerNightStudySchema = new mongoose.Schema({
  dinner: [String],
  nightStudyTime: Date,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('DinnerNightStudy', DinnerNightStudySchema);
