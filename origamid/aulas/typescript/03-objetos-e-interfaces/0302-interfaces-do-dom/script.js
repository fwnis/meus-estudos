"use strict";
const links = document.querySelectorAll(".link");
function pintarLinks(link) {
    link.style.color = "blue";
    link.style.border = "1px solid red";
}
links.forEach((link) => {
    // console.dir(link.__proto__)
    if (link instanceof HTMLElement) {
        pintarLinks(link);
    }
});
