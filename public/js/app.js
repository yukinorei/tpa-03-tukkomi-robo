import { initializeDomListeners } from './view.js';
import { handleSubmit } from './logic.js';

const initApp = function() {
  initializeDomListeners(handleSubmit);
};

export {
  initApp,
};
