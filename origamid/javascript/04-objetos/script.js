const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R. Tolkien";

const nomeFilme = "O Senhor dos Anéis";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

const livro = {
  nome: "O Senhor dos Anéis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};

const filme = {
  nome: "O Senhor dos Anéis",
  ano: 2001,
  autor: "J. R. R. Tolkien",
  diretor: "Peter Jackson",
};

console.log(livro.nome + filme.diretor);

const texto = document.querySelector("p");

console.log(texto.innerHTML);

console.log(autor.toUpperCase());
const decimal = 2.99;

console.log(decimal.toFixed() + 3)
console.log(Number(decimal.toFixed()) + 3)