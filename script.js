// Menü: Dropdown + Autoclose + ESC + Scroll-Lock
const btn   = document.querySelector('.menu-button');
const panel = document.getElementById('menu-panel');

if (btn && panel) {
  const openMenu = () => {
    panel.classList.add('open');
    btn.classList.add('rot');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    panel.classList.remove('open');
    btn.classList.remove('rot');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.contains('open') ? closeMenu() : openMenu();
  });

  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}
