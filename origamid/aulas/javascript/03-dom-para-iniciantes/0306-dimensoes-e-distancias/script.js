const animaisLista = document.querySelector(".animais-lista");

animaisLista.clientHeight; // height + padding
animaisLista.offsetHeight; // height + padding + border
animaisLista.scrollHeight; // height total, mesmo dentro de scroll

const height = animaisLista.scrollHeight;
const animaisTop = animaisLista.offsetTop;
console.log(animaisTop);

const rect = animaisLista.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

// EXERCICIO
// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagem = document.querySelector("img");
console.log(imagem.offsetTop);

// Retorne a soma da largura de todas as imagens\
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((img) => {
    soma = soma + imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
const browserSmall = window.matchMedia("(max-width: 720px)").matches;
if (browserSmall) {
  menu.classList.add("menu-mobile");
}
