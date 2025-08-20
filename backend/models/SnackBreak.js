const mongoose = require('mongoose');

const SnackBreakSchema = new mongoose.Schema({
  items: [String],
  calories: Number,
  junkFood: { type: Boolean, default: false },
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SnackBreak', SnackBreakSchema);
