"use strict";
const { body, } = document;
function handleData({ nome, preco }) {
    nome.includes("book");
    preco?.toFixed();
}
handleData({
    nome: "Notebook",
});
function handleClick({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `
    <h1>Mouse click em x: ${pageX}</h1>`;
    }
    console.log(pageX);
}
document.documentElement.addEventListener("click", handleClick);
function comparar(tipo, ...numeros) {
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
    if (tipo === "maior") {
        return Math.max(...numeros);
    }
}
console.log(comparar("menor", 3, 4, 5, 6, 7, 1, 30, 20, 11, 23));
console.log(comparar("maior", 3, 4, 5, 6, 7, 1, 30, 20, 11, 23));
