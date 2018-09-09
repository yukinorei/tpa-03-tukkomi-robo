const getRandomNumber = function(min, maxNonInclusive) {
  const range = maxNonInclusive - min;
  return min + Math.floor(Math.random() * range);
};

module.exports = {
  getRandomNumber,
};
