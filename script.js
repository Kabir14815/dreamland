(function () {
  'use strict';

  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (nav && nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });
})();
