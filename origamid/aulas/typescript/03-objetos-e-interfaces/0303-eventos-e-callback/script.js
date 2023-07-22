"use strict";
// const ativarMenu = document.querySelector("#btn-mobile");
// function handleMenu() {
//   const menuOpen = ativarMenu?.getAttribute("aria-expanded");
//   const nav = document.querySelector("#nav");
//   if (menuOpen === "false") {
//     nav?.classList.add("active");
//     ativarMenu?.setAttribute("aria-expanded", "true");
//     ativarMenu?.setAttribute("aria-label", "Fechar Menu");
//   } else if (menuOpen === "true") {
//     nav?.classList.remove("active");
//     ativarMenu?.setAttribute("aria-expanded", "false");
//     ativarMenu?.setAttribute("aria-label", "Abrir Menu");
//   }
// }
// ativarMenu?.addEventListener("click", handleMenu);
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
    const button = event.currentTarget;
    const nav = document.getElementById("nav");
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav.classList.remove("active");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            nav.classList.add("active");
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
btnMobile?.addEventListener("pointerdown", toggleMenu);
