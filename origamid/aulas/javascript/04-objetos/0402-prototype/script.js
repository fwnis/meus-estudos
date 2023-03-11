function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.andar = function () {
    return " andou pelo objeto";
  };
}

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};

const eduardo = new Pessoa("Eduardo", "Fanis", 17);

console.log(Pessoa.prototype);
console.log(eduardo.prototype);

const pais = "Brasil";
const cidade = new String("Rio");

pais.charAt(0); // B
cidade.charAt(0); // R

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];
const lista = document.querySelectorAll("li");

// Transformar em uma array
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // Object
Carro.marca; // String
Carro.preco; // Number
Carro.acelerar; // Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String

// EXERCICIO
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const eduardo2 = new Pessoas("Eduardo", "Fanis", 17);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");
console.log(HTMLLIElement.prototype);

console.log(li.clientHeight);

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
