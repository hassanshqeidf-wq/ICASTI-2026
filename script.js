const menuToggle=document.querySelector(".menu-toggle"),menu=document.querySelector("#menu");
menuToggle?.addEventListener("click",()=>{const open=menu.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));

const header=document.querySelector("#header");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>20));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const target=new Date("2026-12-21T09:00:00+02:00").getTime();
function tick(){
  let d=Math.max(0,target-Date.now()),days=Math.floor(d/86400000);d%=86400000;
  let hours=Math.floor(d/3600000);d%=3600000;let minutes=Math.floor(d/60000);let seconds=Math.floor((d%60000)/1000);
  document.querySelector("#days").textContent=days;document.querySelector("#hours").textContent=String(hours).padStart(2,"0");
  document.querySelector("#minutes").textContent=String(minutes).padStart(2,"0");document.querySelector("#seconds").textContent=String(seconds).padStart(2,"0");
}
tick();setInterval(tick,1000);
