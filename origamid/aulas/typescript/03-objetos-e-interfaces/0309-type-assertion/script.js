"use strict";
const video = document.querySelector(".player");
video?.volume;
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    return response.json();
}
async function handleProduto() {
    const produto = await fetchProduto();
    console.log(produto.nome);
}
const video2 = document.querySelector("video");
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
const video5 = document.querySelector(".player");
