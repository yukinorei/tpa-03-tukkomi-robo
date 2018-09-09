const renderTukkomi = function(robotResponseEl, phraseWithTukkomi) {
  robotResponseEl.innerText = phraseWithTukkomi;
};

const initializeDomListeners = function(handleSubmitCallback) {
  document.getElementById('tukkomi-form').addEventListener('submit', handleSubmitCallback);
};

export {
  renderTukkomi,
  initializeDomListeners,
};
