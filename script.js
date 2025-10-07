// Dropdown-Menü Logik
const btn = document.querySelector('.menu-button');
const panel = document.getElementById('menu-panel');

if (btn && panel) {
  function closeMenu() {
    panel.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('open');
    const isOpen = panel.classList.contains('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Menü schließen, wenn außerhalb geklickt wird
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });

  // ESC-Taste schließt Menü
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}