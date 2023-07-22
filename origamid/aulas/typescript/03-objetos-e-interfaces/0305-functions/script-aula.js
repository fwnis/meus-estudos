"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4);
const subtrair = (a, b) => a - b;
subtrair(4, 3);
function pintarTela(cor) {
    document.body.style.background = cor;
}
if (pintarTela("blue")) {
    console.log("Pintou a tela");
}
else {
    console.log("Não pintou");
}
const btn = document.querySelector("button");
btn?.click();
function isString(value) {
    if (typeof value === "string") {
        return true;
    }
}
console.log(isString("Teste"));
console.log(isString(200));
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar(" PrOdUto "));
console.log(normalizar([" BaNaNa ", "UVA"]));
function $(seletor) {
    return document.querySelector(seletor);
}
$("a");
$("video")?.volume;
$(".item");
