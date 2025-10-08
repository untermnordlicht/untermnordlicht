// Dropdown-Menü + Scroll-Lock
const btn   = document.querySelector('.menu-button');
const panel = document.getElementById('menu-panel');

if (btn && panel) {
  const closeMenu = () => {
    panel.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
    document.body.classList.remove('no-scroll');
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !panel.classList.contains('open');
    panel.classList.toggle('open', willOpen);
    btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    document.body.classList.toggle('no-scroll', willOpen);
  });

  // Link-Klick schließt Menü
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Klick außerhalb
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });

  // ESC
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}