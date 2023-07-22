"use strict";
let total = 20;
total = "30";
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado: ${dados.preco ? "sim" : "não"}</p>
  </div>`;
}
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: true,
};
preencherDados(computador);
preencherDados({
    nome: "Notebook",
    preco: 2000,
    teclado: false,
});
function pintarCategoras(categoria) {
    if (categoria === "codigo") {
        console.log("Pintar azul");
    }
}
pintarCategoras("codigo");
