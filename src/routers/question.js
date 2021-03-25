const express = require('express')
const Question = require('../models/question')
const router = new express.Router()

router.post('/questions', async (req, res) => {
  const question = new Question({
    ...req.body
  })
  try{ 
    await question.save();
    res.status(201).send(question);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
})

router.get('/questions', async (req, res) => {
  try {
    let questions = await Question.find();
    res.send(questions);
  } catch(e) {
    res.status(500).send(e.message);
  }
})

router.patch('/questions/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['questionPrompt', 'correctAnswer'];
  const isValidUpdate = updates.every((update) => {
    allowedUpdates.includes(update);
  });
  if (!isValidUpdate) {
    res.status(400).send({error: 'Invalid updates!'});
  }
});

router.get('/questions/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    // todo: implement lookup in db
    const question = {
      _id: 1,
      question: 'Is this a hard-coded question from the server?',
      correctAnswer: 'Yes!'
    }
  } catch(e) {
    res.status(500).send(e.message);
  }
})

module.exports = router