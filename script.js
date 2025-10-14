
// Dropdown-Menü
const btn = document.querySelector('.menu-button');
const panel = document.getElementById('menu-panel');

function closeMenu(){ if(panel){ panel.classList.remove('open'); } if(btn){ btn.setAttribute('aria-expanded','false'); } }

btn?.addEventListener('click', (e)=>{
  e.preventDefault();
  const isOpen = panel.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.addEventListener('click', (e)=>{
  if(panel && !panel.contains(e.target) && !btn.contains(e.target)) closeMenu();
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeMenu();
});
