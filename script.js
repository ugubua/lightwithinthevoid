const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
const t=document.querySelector('.nav-toggle'), l=document.querySelector('.nav-links');
if(t && l){ t.addEventListener('click', ()=>{ l.style.display = l.style.display==='flex' ? 'none' : 'flex'; }); }