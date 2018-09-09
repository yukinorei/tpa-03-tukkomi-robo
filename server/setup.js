const tukkomiRoboRouter = require('./router');

const setupApi = (app) => {
  app.use('/tukkomi', tukkomiRoboRouter);
};

module.exports = setupApi;
