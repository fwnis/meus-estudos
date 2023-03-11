const carros = ["Ford", "Fiat", "Honda"];
carros.forEach((item, index, array) => {
  array[index] = "Teste";
  console.log(item.toUpperCase(), index, array);
});

console.log(carros);

const li = document.querySelectorAll("li");
const retornoForEach = li.forEach((item, index) =>
  item.classList.add("ativo" + index)
);

console.log(retornoForEach); // undefined

const carros2 = ["Ford", "Fiat", "Honda"];
const newCarros = carros2.map((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
  return "Carro " + item;
});

console.log(carros2); // ['Ford', 'Fiat', 'Honda']
console.log(newCarros); // ['Ford', 'Fiat', 'Honda']

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2);
console.log(numerosX2); // [4, 8, 10, 12, 156]

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);

const nomeAulas = (aula) => aula.nome;

const nomeAulas2 = function (aula) {
  return aula.nome;
};

const arrayNomeAulas = aulas.map(nomeAulas);

console.log(arrayNomeAulas);
console.log(tempoAulas);

// reduce
const soma = [10, 25, 30];

const reduceSoma = soma.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
}, 0);

console.log(reduceSoma);

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) => {
  if (anterior > atual) return anterior;
  else return atual;
}, 0);

console.log(maiorNumero);

const aulas2 = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

// reduce string
const listaAulas = aulas.reduce((acumulador, aula, index) => {
  console.log(aula.nome);
  acumulador[index] = aula.nome;
  return acumulador;
}, {});
console.log(listaAulas);

// reduce e reduceRight
const frutas = ["Banana", "Pêra", "Uva"];
const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);
console.log(frutasRight); // Uva Pêra Banana
console.log(frutasLeft); // Banana Pêra Uva

// some
const temUva = frutas.some((fruta) => {
  return fruta === "Uva";
});
console.log(temUva); // true

// every
const every = frutas.every((fruta) => {
  return fruta;
});
console.log(every); // true

const numeros3 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every((n) => n >= 7);
console.log(maiorQue3); // false

// findIndex
const frutas2 = ["Banana", "Pêra", "Uva", "Maçã"];
const indexUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
});
console.log("Index: " + indexUva); // Index: 2

const frutas3 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];

// Filter
const arrayFrutas = frutas3.filter((item) => {
  return item;
});

console.log(arrayFrutas); // ['Banana', 'Uva', 'Maçã']

// Filter em objetos
const aulas3 = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const maiores15 = aulas.filter((aula) => {
  console.log(aula.min);
  return aula.min >= 15;
});
console.log(maiores15);

// EXERCICIOS
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aula = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aula,
    horas,
  };
});

console.log(arrayCursos);
console.log(objCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros4 = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros4.filter((numero) => {
  return numero >= 100;
});
console.log(maioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const temBaixo = instrumentos.some((instrumento) => {
  return instrumento === "Baixo";
});
console.log(temBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");

  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);
