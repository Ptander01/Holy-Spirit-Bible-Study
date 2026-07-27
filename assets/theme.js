/* ═══════════════════════════════════════════════════════════════
   Bible Study Library — shared theme runtime

   Load in <head> WITHOUT defer: the top half must run before first
   paint so a stored light theme doesn't flash dark. The toggle DOM
   is injected on DOMContentLoaded, so pages need no extra markup.

   Theme choice is shared across the whole library via the
   'bsl-theme' localStorage key. Defaults to dark, matching the
   sister apps — only an explicit choice switches it.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var KEY = 'bsl-theme';

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  /* ── 1. Pre-paint: apply the stored theme immediately ── */
  if (stored() === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  /* ── 2. On DOM ready: build and wire the toggle ── */
  function init() {
    if (document.querySelector('.tt-wrap')) return;

    var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="#8a93b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    var SUN  = '<svg viewBox="0 0 24 24" fill="none" stroke="#a8761f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 1.6v2.4M12 20v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M1.6 12h2.4M20 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"/></svg>';

    var wrap = document.createElement('div');
    wrap.className = 'tt-wrap';
    wrap.innerHTML =
      '<span class="tt-glow-wide"></span>' +
      '<span class="tt-glow-mid"></span>' +
      '<span class="tt-glow-core"></span>' +
      '<button class="tt" type="button" aria-label="Switch between dark and light theme" aria-pressed="false">' +
        '<span class="tt-track"></span>' +
        '<span class="tt-recess"></span>' +
        '<span class="tt-floor-glow"></span>' +
        '<span class="tt-rim"></span>' +
        '<span class="tt-knob">' +
          '<span class="tt-knob-spec"></span>' +
          '<span class="tt-icon tt-icon--moon tt-icon--visible">' + MOON + '</span>' +
          '<span class="tt-icon tt-icon--sun">' + SUN + '</span>' +
        '</span>' +
      '</button>' +
      '<span class="tt-shadow"></span>';
    document.body.appendChild(wrap);

    var btn  = wrap.querySelector('.tt');
    var moon = wrap.querySelector('.tt-icon--moon');
    var sun  = wrap.querySelector('.tt-icon--sun');

    function current() {
      return document.documentElement.getAttribute('data-theme') === 'light'
        ? 'light' : 'dark';
    }

    function paint(theme) {
      var light = theme === 'light';
      if (light) document.documentElement.setAttribute('data-theme', 'light');
      else document.documentElement.removeAttribute('data-theme');
      btn.classList.toggle('tt--light', light);
      wrap.classList.toggle('tt-wrap--light', light);
      btn.setAttribute('aria-pressed', String(light));
      moon.classList.toggle('tt-icon--visible', !light);
      sun.classList.toggle('tt-icon--visible', light);
      try { localStorage.setItem(KEY, theme); } catch (e) {}
    }

    paint(current());

    /* Two-stage press: squash down, flip the theme while it's at the
       bottom of the press, then spring back up in the new theme. */
    btn.addEventListener('click', function () {
      btn.classList.add('tt--pressed');
      setTimeout(function () {
        paint(current() === 'light' ? 'dark' : 'light');
        setTimeout(function () { btn.classList.remove('tt--pressed'); }, 400);
      }, 140);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
