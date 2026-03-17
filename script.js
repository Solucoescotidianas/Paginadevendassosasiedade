(function () {
  document.querySelectorAll('[data-scroll]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;
      var el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('a[data-cta]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      try {
        console.log('[CTA]', btn.getAttribute('data-cta') || 'unknown', new Date().toISOString());
      } catch (_) {}
    });
  });
})();
