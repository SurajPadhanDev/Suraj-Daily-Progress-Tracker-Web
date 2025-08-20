const mongoose = require('mongoose');

const BreakfastSchema = new mongoose.Schema({
  items: [String],
  calories: Number,
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Breakfast', BreakfastSchema);
