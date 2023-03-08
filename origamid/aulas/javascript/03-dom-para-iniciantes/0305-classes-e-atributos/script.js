const menu = document.querySelector(".menu");

menu.className; // string
menu.classList; // lista de classes
menu.classList.add("ativo");
menu.classList.add("ativo", "mobile"); // duas classes
menu.classList.remove("ativo");
menu.classList.toggle("ativo"); // adiciona/remove a classe
menu.classList.contains("ativo"); // true ou false
menu.classList.replace("ativo", "inativo");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

// Attributes
const animais = document.querySelector(".animais");
console.log(animais.attributes);

const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Texto Alternativo"); // muda o alt
img.hasAttribute("id"); // true / false
img.removeAttribute("alt"); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

const srcImg = img.getAttribute("src");

img.setAttribute("alt", "É uma Raposa");

const altImg = img.getAttribute("alt");

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);

console.log(srcImg);
console.log(altImg);

// const animais = document.querySelector('.animais');
// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only

// EXERCICIO
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu li");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const primeiroItem = document.querySelector(".menu li");

itensMenu.forEach((item) => {
  if (item !== primeiroItem) {
    item.classList.remove("ativo");
  } else {
    item.classList.add("ativo");
  }
});
// Solução da aula
// itensMenu.forEach((item) => {
//   item.classList.remove("ativo");
// });
// itensMenu[0].classList.add("ativo")

// Verifique se as imagens possuem o atributo alt
itensMenu.forEach((item) => {
  const imgAlt = item.hasAttribute("alt");
  console.log(imgAlt);
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector(".menu li:last-child");
linkExterno.setAttribute("href", "https://www.google.com");

// Solução da aula
// const link = document.querySelector('a[href^="http"]');
// link.setAttribute("href", "https://www.google.com");
