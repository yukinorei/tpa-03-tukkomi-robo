const express = require('express');
const getRandomTukkomi = require('./get-random-tukkomi.js');

const tukkomiRoboRouter = express.Router();

tukkomiRoboRouter.get('/', (req, res) => {
  const { phrase } = req.query;
  console.log('phrase = ', phrase);

  if (!phrase) {
    const errorMessage = '何も言わんの？';
    res.send(errorMessage);
  } else {
    const tukkomiMessage = `${phrase}...って、${getRandomTukkomi()}`;
    res.send(tukkomiMessage);
  }
});

module.exports = tukkomiRoboRouter;
