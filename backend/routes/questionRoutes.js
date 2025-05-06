const express = require('express');
const router = express.Router();
const Question = require('../models/Question');


router.get('/:chapterId', async (req, res) => {
  try {
    const chapterId = parseInt(req.params.chapterId);
    // console.log('Requested Chapter ID:', chapterId); // <-- Add this
    const questions = await Question.find({ chapterId });
// console.log('Questions found:', questions); // Add this
res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;