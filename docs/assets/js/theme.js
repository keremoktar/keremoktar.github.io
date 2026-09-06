/* Colour theme control: light, dark, or follow the system.
   The stored choice is applied in the document head; this only wires the
   button, so the page renders correctly whether or not it runs. */
(function () {
  'use strict';

  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  var order = ['system', 'light', 'dark'];
  var labels = {
    system: 'Colour theme: matching your system. Switch to light.',
    light: 'Colour theme: light. Switch to dark.',
    dark: 'Colour theme: dark. Switch to matching your system.'
  };

  function current() {
    var stamp = root.getAttribute('data-theme');
    return stamp === 'light' || stamp === 'dark' ? stamp : 'system';
  }

  function describe() {
    var label = labels[current()];
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  // Only reveal the control once it can actually do something.
  button.hidden = false;
  describe();

  button.addEventListener('click', function () {
    var next = order[(order.indexOf(current()) + 1) % order.length];
    try {
      if (next === 'system') localStorage.removeItem('theme');
      else localStorage.setItem('theme', next);
    } catch (e) {
      /* the choice still applies for this page view */
    }
    if (next === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', next);
    describe();
  });
})();
