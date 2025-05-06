const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  chapterId: Number,              // Fix: use chapterId (not id)
  chapter: String,
  exercise: String,
  questionText: String,
  questionImage: String,
  options: [String],
  correctAnswer: String,
  solutionText: String // or use solutionVideo if you support video later
});

module.exports = mongoose.model('Question', questionSchema);