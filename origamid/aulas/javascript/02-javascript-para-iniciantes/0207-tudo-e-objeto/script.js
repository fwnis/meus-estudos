var nome = "Eduardo";
var nomeMaiusculo = nome.toLocaleUpperCase();
console.log(nomeMaiusculo);

var altura = 1.7;
altura.toString(); // 1.8
altura.toFixed(); // 2
console.log(altura.toFixed());

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log("Clicou");
});

// EXERCICIO
// nomeie 3 propriedades ou métodos de strings
var nome = "Eduardo";
nome.length;
nome.toUpperCase();
nome.toLowerCase();

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
btn.addEventListener;
btn.classList;
btn.contains;
btn.removeAttribute;
btn.removeEventListener;

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
