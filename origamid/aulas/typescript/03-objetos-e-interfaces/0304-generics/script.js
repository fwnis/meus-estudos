"use strict";
// function retorno<variavel>(a: variavel): variavel {
//   return a;
// }
// console.log(retorno<string>("A Game"));
// console.log(retorno<number>(200));
// console.log(retorno<boolean>(true));
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"];
// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5);
// }
// console.log(firstFive(numeros));
// console.log(firstFive(frutas));
// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   else return null;
// }
// console.log(notNull("Eduardo")?.toLowerCase());
// console.log(notNull(200)?.toFixed());
// function tipoDado<T>(a: T): { dado: T; tipo: string } {
//   const resultado = {
//     dado: a,
//     tipo: typeof a,
//   };
//   console.log(resultado);
//   return resultado;
// }
// tipoDado("teste");
// function extractText<Tipo extends HTMLElement>(el: Tipo) {
//   return {
//     texto: el.innerText,
//     el,
//   };
// }
// const link = document.querySelector("a");
// if (link) {
//   console.log(extractText(link));
// }
// function $<Tipo extends Element>(selector: string): Tipo | null {
//   return document.querySelector(selector);
// }
// const link = $<HTMLAnchorElement>("a")?.href;
const link = document.querySelector(".link");
if (link instanceof HTMLVideoElement) {
    link.volume;
}
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook);
}
handleData();
