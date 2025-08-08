// Year stamp
const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
// Mobile nav
const t=document.querySelector('.nav-toggle'), l=document.querySelector('.nav-links');
if(t && l){ t.addEventListener('click', ()=>{ l.style.display = l.style.display==='flex' ? 'none' : 'flex'; }); }
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{ a.addEventListener('click', e=>{ const target=document.querySelector(a.getAttribute('href')); if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); } }); });
