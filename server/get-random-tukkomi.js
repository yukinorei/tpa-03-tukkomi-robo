const mathUtils = require('./math-utils');

const options = [
  'なんでやねん！',
  'ありえん！',
  'しょーもないなー',
  'いやいや、あかんあかん',
  'お前なんかおかしいぞ、病院に行ってこい',
  'あっち行け、馬鹿が移ったら困るから',
  'アホたれ',
];

const getRandomTukkomi = function() {
  return options[mathUtils.getRandomNumber(0, options.length)];
};

module.exports = getRandomTukkomi;
