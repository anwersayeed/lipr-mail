const mongoose = require('mongoose');

// frequency :- 0 : 20 seconds, 1 : 30 seconds, 2 : daily, 3 : weekly, 4 : monthly, 5 : yearly

const mailSchema = new mongoose.Schema({
  isActive: {
    type: Boolean,
    default: false,
  },
  mailCounter: {
    type: Number,
    default: 0,
  },
  scheduleDate: {
    type: Date,
    required: true,
  },
  frequency: {
    type: Number,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  cc: {
    type: String,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('mail', mailSchema);
