
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


// Lightbox for images in .grid.photos
(function(){
  const grid = document.querySelector('.grid.photos');
  if(!grid) return;
  let backdrop = document.querySelector('.lightbox-backdrop');
  if(!backdrop){
    backdrop = document.createElement('div');
    backdrop.className = 'lightbox-backdrop';
    backdrop.innerHTML = '<img class="lightbox-image" alt="">';
    document.body.appendChild(backdrop);
  }
  const imgEl = backdrop.querySelector('.lightbox-image');
  grid.addEventListener('click', (e)=>{
    const img = e.target.closest('img');
    if(!img) return;
    imgEl.src = img.src;
    backdrop.classList.add('open');
  });
  backdrop.addEventListener('click', ()=> backdrop.classList.remove('open'));
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') backdrop.classList.remove('open');
  });
})();
