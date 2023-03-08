const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

console.log(titulos);

titulosArray.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// Arrow Function
const imagens = document.querySelectorAll("img");

imagens.forEach((item, index, array) => {
  console.log(item, index, array);
});

//OU
imagens.forEach((item) => {
  console.log(item);
});

// OU
imagens.forEach((item) => console.log(item));

// OU
let i = 0;
imagens.forEach(() => console.log(i));

// EXERCICIO
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const img = document.querySelectorAll("img");

img.forEach((item, index) => {
  console.log(item, index);
});

img.forEach(() => {
  console.log(i++);
});

img.forEach(() => i++);
