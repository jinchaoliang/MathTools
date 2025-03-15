const mongoose = require('mongoose');

const studyStatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  hours: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('StudyStat', studyStatSchema); 