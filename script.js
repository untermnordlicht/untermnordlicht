
// Dropdown-Menü
const btn = document.querySelector('.menu-button');
const panel = document.getElementById('menu-panel');
function closeMenu(){ if(panel){ panel.classList.remove('open'); } if(btn){ btn.setAttribute('aria-expanded','false'); } }
btn?.addEventListener('click', (e)=>{ e.preventDefault(); const isOpen = panel.classList.toggle('open'); btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false'); });
document.addEventListener('click', (e)=>{ if(panel && !panel.contains(e.target) && !btn.contains(e.target)) closeMenu(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeMenu(); });

// Lightbox (in-page, no new tabs)
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);
lightbox.addEventListener('click', ()=> lightbox.classList.remove('active'));

document.querySelectorAll('.gallery img').forEach(img=>{
  if (img.complete) img.classList.add('loaded');
  else img.addEventListener('load', ()=> img.classList.add('loaded'));
  img.addEventListener('click', ()=>{
    lightbox.innerHTML = '';
    const big = document.createElement('img');
    big.src = img.currentSrc || img.src;
    lightbox.appendChild(big);
    lightbox.classList.add('active');
  });
});

// Fade-in on scroll
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.15});
document.querySelectorAll('.fade-in').forEach(el=> obs.observe(el));

// Year
document.getElementById('y')?.textContent = new Date().getFullYear();
