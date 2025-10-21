// Robustes Menü: unterstützt .menu-toggle ODER .menu-button
// und #hauptmenue ODER #menu-panel
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

  // Klick auf Button toggelt
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    setOpen(panel.hidden);
  });

  // Klick außerhalb schließt
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      setOpen(false);
    }
  });

  // ESC schließt
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();
