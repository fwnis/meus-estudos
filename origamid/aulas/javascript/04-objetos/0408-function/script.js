function areaQuadrado(lado) {
  return lado * lado;
}

const perimetroQuadrado = new Function("lado", "return lado * 4");

function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'

function darOi(nome, idade) {
  console.log("Oi para você " + nome);
}

darOi.call(null, "Eduardo", 17);

function descricaoCarro(velocidade) {
  console.log(this.marca + " " + this.ano + " ", velocidade);
}

descricaoCarro.call({ marca: "Honda", ano: 2015 }, 100);

const carros = ["Ford", "Fiat", "VW"];

carros.forEach((item) => {
  console.log(item);
}); // log de cada carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // log de cada carro

const frutas = ["Banana", "Uva", "Pêra"];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // log de cada fruta

// EXEMPLO REAL
function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const ul = new Dom("ul");

const li = {
  element: document.querySelector("li"),
};

Dom.prototype.ativo.call(li, "ativar");

// ul.ativo("ativar")
// ul.ativo.call(li, "ativar") // substitui o objeto

console.log(ul);

const frutas2 = ["Banana", "Uva", "Pêra"];

Array.prototype.pop.call(frutas2); // frutas.pop()

console.log(frutas2);

// Array-like

const li2 = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li2, (item) => {
  console.log(item);
  return item.classList.contains("ativar");
});

console.log(filtro);
console.log(li2);

const numeros = [33, 435, 1123, 53546, 11, 4];
console.log(Math.max.apply(null, numeros));

const $ = document.querySelectorAll.bind(document);
console.log($("li"));

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));

console.log(carro);

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

imc(1.8, 70); // 21.6
imc180(70); // 21.6

// EXERCICIOS
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, paragrafo) => {
    return acumulador + paragrafo.innerText.length;
  },
  0
);

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElemento("li", "novo", "Novo elemento"))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, "h1", "titulo")

console.log(h1Titulo("Cursos de JavaScript"))