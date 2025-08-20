const mongoose = require('mongoose');

const SleepSchema = new mongoose.Schema({
  bedtime: Date,
  wakeupTime: Date
});

module.exports = mongoose.model('Sleep', SleepSchema);
