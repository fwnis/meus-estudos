// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

// window.alert("Isso é um alerta");
// alert("Isso é um alerta")

const href = window.location.href;
console.log(href)
if(href === "https://www.google.com") {
  console.log("É igual")
} else {
  console.log("É diferente")
}

// Seleciona o primeiro h1
const titulo = document.querySelector("h1")
titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;


function callback(click) {
  console.log("Clicou em", titulo.innerText)
}
titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

console.log(titulo.classList)

// EXERCICIO
// Retorne o url da página atual utilizando o objeto window
const url = window.location.href

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector(".ativo")

// Retorne a linguagem do navegador
const linguagem = navigator.language

// Retorne a largura da janela 
const largura = window.innerWidth
