var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// retorna Possui graduação e não executa o else

var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui Doutorado");
}
// retorna o else

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna possui graduação, mas não possui doutorado

var nome = "Eduardo";

if (nome) {
  console.log(nome);
} else {
  console.log("Não possui nome");
}

// Operador Lógico de Negação (!)

if (!possuiDoutorado) {
  console.log("Não possui doutorado");
}

10 > 5; // true
10 > 10; // false
10 >= 10; // true
10 <= 10; // true

10 == "10"; // true
10 === "10"; // false
"Gato" !== "Gato"; // false
"gato" !== "Gato"; // true

// OPERADORES LÓGICOS &&
// && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

// OPERADORES LÓGICOS ||
// || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

// Retorna o primeiro valor true que encontrar

var corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe a céu");
    break;
  case "Amarelo":
    console.log("Olhe o sol");
    break;
  case "Verde":
    console.log("Olhe a natureza");
    break;
  default:
    console.log("Feche os olhos.");
}

// EXERCICIO

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual'

var idade = 17;
var idadePrima = 18;

if (idade > idadePrima) {
  console.log("É maior");
} else if (idade === idadePrima) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Eduardo"; // true
var idade = 17; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes no Brasil com China
var brasil = 207;
var china = 1240;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("Brasil tem menos habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
