// Warten bis ALLES geladen ist (sicher in CodePen)
window.addEventListener('load', () => {
  // Jahr
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Elemente holen
  const btn   = document.querySelector('.menu-button');
  const panel = document.getElementById('menu-panel');

  // Falls HTML nicht passt: leise abbrechen (verhindert Fehlermeldungen)
  if (!btn || !panel) {
    console.warn('Menü-Elemente nicht gefunden.');
    return;
  }

  const closeMenu = () => {
    panel.classList.remove('open');
    btn.classList.remove('rot');
    btn.setAttribute('aria-expanded','false');
  };

  // Toggle
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = panel.classList.toggle('open');
    btn.classList.toggle('rot', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Auto-Close bei Linkklick
  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });

  // Klick außerhalb
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });

  // ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});