Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false

parseFloat("99.50"); // Mesma função sem o Number
Number.parseFloat("99.50"); // 99.5
Number.parseFloat("100 Reais"); // 100
Number.parseFloat("R$ 100"); // NaN

parseInt("99.50", 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt("100 Reais", 10); // 100

const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499

const preco3 = 2.99;
preco.toString(10); // '2.99'

let valor = 48.49;
valor = valor.toLocaleString("pt-Br", { style: "currency", currency: "USD" });

console.log(valor);

console.log(Math.PI);

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

Math.max(5, 3, 10, 42, 2); // 42 retonar o maximo
Math.min(5, 3, 10, 42, 2); // 2 retorna o minimo

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// Math.floor(Math.random() * (max - min + 1)) + min;

// const aleatorio = Math.floor(Math.random() * 500)
// console.log(aleatorio)

// EXERCICIO
// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

// Retorne o maior número da lista abaixo
let numeros = "4, 5, 20, 8, 9";
numeros = numeros.split(", ");
const numeroMaximo = Math.max(...numeros);
console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPrecos(valor) {
  valor = +valor.toUpperCase().replace("R$", "").trim().replace(",", ".");
  valor = +valor.toFixed(2);
  return valor;
}
let soma = 0;
listaPrecos.forEach((valor) => {
  soma += limparPrecos(valor);
});

console.log(
  soma.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

limparPrecos(listaPrecos[3]);
