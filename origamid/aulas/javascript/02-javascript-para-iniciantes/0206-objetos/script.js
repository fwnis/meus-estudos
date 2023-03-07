var pessoa = {
  nome: "Eduardo",
  idade: 17,
  profissao: "Designer",
  possuiFaculdade: false,
};

pessoa.nome; // "Eduardo"
pessoa.faculdade; // false

console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

console.log(quadrado.perimetro(7));

console.log(Math.random());

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
};

var bg = menu.backgroundColor;

// EXERCICIO

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Eduardo",
  sobrenome: "Fanis",
  idade: 17,
  cidade: "Curitiba",
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raça: "Labrado",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa == "Homem") {
      return true;
    } else {
      return false;
    }
  },
};

console.log(cachorro.latir("Homem"));
