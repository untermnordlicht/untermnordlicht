// Dropdown-Menü (stabile 0.9.4-Logik)
document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.querySelector('.menu-button');
  const panel = document.getElementById('menu-panel');
  if(!btn || !panel) return;

  const close = () => { panel.classList.remove('open'); btn.setAttribute('aria-expanded','false'); };
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', (e)=>{
    if(!panel.contains(e.target) && !btn.contains(e.target)) close();
  });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });
});