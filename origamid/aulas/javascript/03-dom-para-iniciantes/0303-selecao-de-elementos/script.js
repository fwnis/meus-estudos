// Seeleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

// Retorna null caso não exista
const naoExiste = document.getElementById("teste");

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato");

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

//querySelector retorna o primeiro elemento que combinar com seu seletor CSS.
const animais = document.querySelector(".animais");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector("[href^='https://']");
const primeiraUl = document.querySelector("ul");

// Busca dentro da Ul apenas
const navItem = primeiraUl.querySelector("li");

//querySelectorAll retorna o todos os elementos compatíveis com seu seletor CSS em um NodeList.
const listas = document.querySelectorAll(".grid-section");
const titulo = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection[1]);

// Diferença de HTMLCollection e NodeList
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

// NodeList da pra usar forEach ao contrário de HTMLCollection
gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

// Transforma arrays-like em arrays
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});

// EXERCICIO
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");

// Retorne no console apenas as imagens que começaram com a palavra imagem
const palavraImagem = document.querySelectorAll("[src^='img/imagem'");

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#'");

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[--paragrafos.length]);
