"use strict";
let chave;
chave = "preco";
function coordenadas(x, y) {
    return { x, y };
}
let coord;
coord = (x, y) => {
    return {
        x,
        y,
    };
};
let key;
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar("a")?.href;
selecionar("video")?.volume;
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
async function fetchData(url) {
    const base = "https://api.origamid.dev/json";
    const response = await fetch(base + url);
    return await response.json();
}
function checkInterface(obj, key) {
    if (obj && typeof obj === "object" && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
async function handleData() {
    const jogo = await fetchData("/jogo.json");
    if (checkInterface(jogo, "desenvolvedora")) {
        console.log(jogo.desenvolvedora.toLowerCase());
    }
    const livro = await fetchData("/livro.json");
    if (checkInterface(livro, "autor")) {
        console.log(livro.autor);
    }
}
handleData();
