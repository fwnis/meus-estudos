(()=>{"use strict";function t(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll("[data-menu='suave'] a[href^='#']").forEach((e=>{e.addEventListener("click",t)}))}function e(){const t=document.querySelectorAll("[data-anime='accordion'] dt");if(t.length){function e(){this.classList.toggle("ativo"),this.nextElementSibling.classList.toggle("ativo")}t[0].classList.add("ativo"),t[0].nextElementSibling.classList.add("ativo"),t.forEach((t=>{t.addEventListener("click",e)}))}}function n(){const t=document.querySelectorAll("[data-tab='menu'] li"),e=document.querySelectorAll("[data-tab='content'] section");if(t.length&&e.length){function n(t){e.forEach((t=>{t.classList.remove("ativo")}));const n=e[t].dataset.anime;e[t].classList.add("ativo",n)}t.forEach(((t,e)=>{t.addEventListener("click",(()=>{n(e)}))}))}}function o(t,e,n){const o=document.documentElement,a="data-outside";function i(c){t.contains(c.target)||(t.removeAttribute(a),e.forEach((t=>{o.removeEventListener(t,i)})),n())}t.hasAttribute(a)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,i)}))})),t.setAttribute(a,""))}t(),e(),n(),t(),function(){const t=document.querySelectorAll("[data-anime='scroll']");if(t.length){const e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}n(),window.addEventListener("scroll",n)}}(),e(),n(),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');if(t&&e&&n){function o(t){t.preventDefault(),n.classList.toggle("ativo")}function a(t){t.target===this&&o(t)}t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",a)}}(),function(){function t(t){const o=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);o.style.top=t.pageY+"px",o.style.left=t.pageX+"px",n.tooltipBox=o,this.addEventListener("mousemove",n),e.tooltipBox=o,e.element=this,this.addEventListener("mouseleave",e)}document.querySelectorAll("[data-tooltip]").forEach((e=>{e.addEventListener("mouseover",t)}));const e={tooltipBox:"",element:"",handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",e),this.element.removeEventListener("mousemove",n)}},n={handleEvent(t){this.tooltipBox.style.top=t.pageY+20+"px",this.tooltipBox.style.left=t.pageX+20+"px"}}}(),function(){function t(t){t.preventDefault(),this.classList.add("active"),o(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((e=>{["touchstart","click"].forEach((n=>{e.addEventListener(n,t)}))}))}(),function(){const t=document.querySelector("[data-menu='button']"),e=document.querySelector("[data-menu='list']"),n=["click","touchstart"];if(t){function a(a){e.classList.add("active"),t.classList.add("active"),o(e,n,(()=>{e.classList.remove("active"),t.classList.remove("active")}))}n.forEach((e=>{t.addEventListener("click",a)}))}}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,a=o.getDay(),i=o.getHours(),c=-1!==e.indexOf(a),s=i>=n[0]&&i<=n[1];c&&s&&t.classList.add("aberto")}(),async function(t){try{const t=await fetch("./animaisapi.json"),e=await t.json(),n=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}`,e}(t);n.appendChild(e)})),function(){const t=document.querySelector(".numeros"),e=new MutationObserver((function(t){t[0].target.classList.contains("ativo")&&(e.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const a=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(a))}),25*Math.random())})))}));e.observe(t,{attributes:!0})}()}catch(t){console.log(Error(t))}}()})();