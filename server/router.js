const express = require('express');

const tukkomiRoboRouter = express.Router();

tukkomiRoboRouter.get('/', (req, res) => {
  const { phrase } = req.query;
  console.log('phrase = ', phrase);

  //
  // TODO
  //
  // if phrase が空っぽだったらエラーメッセージを送ろう。
  // else phrase にツッコミを追加して送ろう。 (HINT: get-random-tukkomi.js が役に立つかも）

  res.send('ツッコミタイム');
});

module.exports = tukkomiRoboRouter;
