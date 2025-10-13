
// Menü öffnen/schließen
const btn = document.querySelector('.menu-button');
const panel = document.getElementById('menu-panel');

function closeMenu(){
  if (!panel) return;
  panel.classList.remove('open');
  btn?.classList.remove('rot');
  btn?.setAttribute('aria-expanded','false');
}

btn?.addEventListener('click', (e)=>{
  e.stopPropagation();
  const open = panel.classList.toggle('open');
  btn.classList.toggle('rot', open);
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.addEventListener('click', (e)=>{
  if (panel && !panel.contains(e.target) && !btn?.contains(e.target)) closeMenu();
});

document.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape') closeMenu();
});
