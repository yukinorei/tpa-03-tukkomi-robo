import { fetchTukkomi } from './api.js';
import { renderTukkomi } from './view.js';

const handleSubmit = function(event) {
  event.preventDefault();

  const phraseEl = document.getElementById('phrase');
  const robotResponseEl = document.getElementById('robot-response');

  fetchTukkomi(phraseEl.value)
    .then((phraseWithTukkomi) => {
      renderTukkomi(robotResponseEl, phraseWithTukkomi);
    });
};

export { handleSubmit };
