// Minimal-Menü: sucht einfach Button + Panel im Header der Seite
(function () {
  const btn   = document.querySelector('header .menu-button, header .menu-toggle');
  const panel = document.querySelector('header .menu-panel');
  if (!btn || !panel) return;

  function setOpen(open){
    if (open) panel.removeAttribute('hidden'); else panel.setAttribute('hidden','');
    btn.setAttribute('aria-expanded', String(open));
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    setOpen(panel.hasAttribute('hidden'));
  });

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) setOpen(false);
  });

  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
})();
