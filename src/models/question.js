const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionPrompt: {
    type: String,
  },
  correctAnswer: {
    type: String,
  },
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question