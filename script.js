// Robustes Menü: funktioniert auf allen Seiten (alte & neue IDs)
(function () {
  const btn = document.querySelector('.menu-toggle, .menu-button');
  if (!btn) return;

  const controls = btn.getAttribute('aria-controls');
  let panel =
    (controls && document.getElementById(controls)) ||
    document.getElementById('hauptmenue') ||
    document.getElementById('menu-panel');

  if (!panel) return;

  function setOpen(open) {
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    setOpen(panel.hidden);
  });

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      setOpen(false);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();
