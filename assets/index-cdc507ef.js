(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();new Swiper(".slider-container",{slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},pagination:{el:".swiper-pagination",type:"fraction",formatFractionCurrent:function(e){return"0"+e},formatFractionTotal:function(e){return"0"+e},renderFraction:function(e,t){return`<div class=${e}></div><div class=${t}></div>`}}});const m=document.querySelector(".catalog-btn"),p=document.querySelector(".modal-close-btn"),b=document.querySelector(".popup-is-hidden"),c={name:"Tube Watch S42 Date Steel With Black Case",elements:null};function l(){c.elements===null&&(c.elements=document.querySelector(".catalog-list-item-picture").innerHTML),document.body.classList.toggle("no-scroll"),b.classList.toggle("popup-is-hidden")}m.addEventListener("click",l);p.addEventListener("click",l);const g=document.querySelector(".catalog-list");g.addEventListener("click",e=>{if(!e.target.matches(".catalog-list-item-p"))return;const t=e.target.closest(".catalog-list-item"),o=document.querySelector(".card-buy-watch");o.querySelector("picture").textContent="",o.querySelector("picture").insertAdjacentHTML("afterbegin",a(t)),document.querySelector(".modal-watch-name").textContent=e.target.textContent.trim(),document.querySelector(".modal-watch-price").textContent=t.querySelector("span.catalog-list-item-span").textContent.trim(),c.name=e.target.textContent.trim(),c.elements=a(t),l()});const y=document.querySelector(".sale-block-title");y.addEventListener("click",e=>{const t=document.querySelector(".card-buy-watch"),o=document.querySelector(".sale-list-item");t.querySelector("picture").textContent="",t.querySelector("picture").insertAdjacentHTML("afterbegin",a(o)),document.querySelector(".modal-watch-name").textContent=e.target.textContent.trim(),document.querySelector(".modal-watch-price").textContent="€700",document.querySelector(".modal-watch-price").insertAdjacentHTML("beforeend",'<span class="modal-watch-sale">€1000</span>'),c.name=e.target.textContent.trim(),c.elements=a(o),l()});function a(e){var o;return(((o=e.querySelector("div>div>picture"))==null?void 0:o.innerHTML)??e.querySelector("div>picture").innerHTML).replace('class="catalog-list-item-picture"',"").replace('class="catalog-list-item-img"',"")}const f=document.querySelector(".modal-submit-btn"),i=document.querySelector(".submit-is-hidden");function d(){document.body.classList.toggle("no-scroll"),i.classList.toggle("submit-is-hidden")}f.addEventListener("click",e=>{e.preventDefault(),i.querySelector(".submit-name").textContent=c.name,i.querySelector(".submit-picture").textContent="",i.querySelector(".submit-picture").insertAdjacentHTML("afterbegin",c.elements),l(),d()});i.addEventListener("click",e=>{e.target.matches(".submit-wrapper>button.modal-close-btn")&&!e.target.matches(".submit-wrapper>button.submit-button")||!e.target.matches(".submit-wrapper>button.modal-close-btn")&&e.target.matches(".submit-wrapper>button.submit-button")||d()});(()=>{const e={openMobileBtn:document.querySelector("[data-mobile-open]"),closeMobileBtn:document.querySelector("[data-mobile-close]"),mobile:document.querySelector("[data-mobile]"),links:document.querySelectorAll("a.burger-menu-navigation-link")};e.openMobileBtn.addEventListener("click",t),e.closeMobileBtn.addEventListener("click",t),e.links.forEach(o=>o.addEventListener("click",t));function t(){e.mobile.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();
