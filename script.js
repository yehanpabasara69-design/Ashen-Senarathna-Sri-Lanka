const langSel=document.getElementById('lang');
function setLang(l){document.documentElement.lang=l==='si'?'si':l==='ta'?'ta':'en';document.querySelectorAll('[data-en]').forEach(e=>{let v=e.dataset[l];if(v)e.textContent=v})}
langSel.addEventListener('change',e=>setLang(e.target.value));
document.getElementById('year').textContent=new Date().getFullYear();
const nav=document.getElementById('nav');document.getElementById('menuBtn').addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const player=document.getElementById('player'),inlinePlayer=document.getElementById('inlinePlayer');
function play(id){player.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';inlinePlayer.classList.add('active');inlinePlayer.scrollIntoView({behavior:'smooth',block:'center'});}
function stop(){player.src='';inlinePlayer.classList.remove('active');}
document.querySelectorAll('[data-video]').forEach(b=>b.addEventListener('click',()=>play(b.dataset.video)));
document.getElementById('closePlayer').addEventListener('click',stop);
document.getElementById('playlistBtn').addEventListener('click',()=>play('videoseries?list=UU92NR9WGugvuGAp-zLoB2uQ'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')stop()});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.section,.heading,.glass,.facts>div,.projects button,.featured,.videoGrid button,.tracks button,.contact').forEach(e=>io.observe(e));
document.head.insertAdjacentHTML('beforeend','<style>.section,.heading,.glass,.facts>div,.projects button,.featured,.videoGrid button,.tracks button,.contact{opacity:0;transform:translateY(15px);transition:opacity .65s ease,transform .65s ease}.show{opacity:1!important;transform:translateY(0)!important}</style>');
setLang('en');