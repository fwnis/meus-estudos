var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 867456461452 % 3;

console.log(modulo);

var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao = "comprei 10" / 2; // NaN (Not a Number)

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var incremento = 1;
console.log(incremento++);
console.log(incremento);

console.log(--incremento);
console.log(++incremento);

var idade = "17";
var somaIdade = 5;

console.log(idade + somaIdade);
console.log(+idade + somaIdade);

// EXERCICIO

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; // 35?
console.log(total); // certo

// Crie duas expressões que retornem NaN
var nan = "Teste NaN" * 2;
console.log(nan);

var nan2 = "Teste NaN 2";
console.log(++nan2);

// Somar a string '200' com o número 50 e retornar 250
var string = "200";
var numero = 50;
var soma = +string + numero;

console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado

var cinco = 5;
console.log(++cinco);

// Como dividir o pesos por 2?
var numero = '80'
var unidade = 'kg'
var peso = numero + unidade // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)
console.log(pesoPorDois)

var pesoPorDois = (+numero / 2) + unidade
console.log(pesoPorDois)

