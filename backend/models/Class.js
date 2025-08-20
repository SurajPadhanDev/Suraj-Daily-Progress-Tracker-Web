const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  className: String,
  status: { type: Boolean, default: false },
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Class', ClassSchema);
