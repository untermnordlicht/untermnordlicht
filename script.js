console.log('v0.9.4 base');

// v0.9.5: page fade-in
window.addEventListener('DOMContentLoaded', ()=> document.body.classList.add('ready'));

// v0.9.5: mark gallery images loaded
document.querySelectorAll('.grid.photos img').forEach(img=>{
  if (img.complete) img.classList.add('loaded');
  else img.addEventListener('load', ()=> img.classList.add('loaded'));
});
