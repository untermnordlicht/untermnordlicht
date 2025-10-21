// Robustes Menü: versteht .menu-toggle ODER .menu-button
// und #hauptmenue ODER #menu-panel ODER .menu-panel
(function () {
  const buttons = Array.from(document.querySelectorAll('.menu-toggle, .menu-button'));
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    const controls = btn.getAttribute('aria-controls');
    let panel =
      (controls && document.getElementById(controls)) ||
      btn.closest('header, nav, body')?.querySelector('#hauptmenue, #menu-panel, .menu-panel');

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
      if (!panel.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  });
})();
