// v1.0.4 robust menu toggle
(function () {
  const btn   = document.querySelector('header .menu-button, header .menu-toggle');
  const panel = document.querySelector('header #menu-panel, header #hauptmenue, header .menu-panel');
  if (!btn || !panel) return;

  function setOpen(open){
    if (open) panel.removeAttribute('hidden'); else panel.setAttribute('hidden','');
    btn.setAttribute('aria-expanded', String(open));
  }

  btn.addEventListener('click', function(e){
    e.preventDefault();
    setOpen(panel.hasAttribute('hidden'));
  });

  document.addEventListener('click', function(e){
    if (!panel.contains(e.target) && !btn.contains(e.target)) setOpen(false);
  });

  window.addEventListener('keydown', function(e){
    if (e.key === 'Escape') setOpen(false);
  });
})();