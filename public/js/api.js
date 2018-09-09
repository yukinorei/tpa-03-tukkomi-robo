const fetchTukkomi = function(phrase) {
  return fetch(`/tukkomi?phrase=${phrase}`)
    .then(resp => resp.text());
};

export {
  fetchTukkomi,
};
