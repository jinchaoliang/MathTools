const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: '其他'
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime: {
    type: Date
  },
  order: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Task', taskSchema) 