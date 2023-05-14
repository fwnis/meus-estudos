const pessoa = new Object({
  nome: "Eduardo",
});

console.log(pessoa);

const carro = {
  init(valor) {
    this.marca = valor;
    return this;
  },
  rodas: 4,
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro);
honda.init("Honda");

console.log(honda);
console.log(honda.acelerar());

const ferrari = Object.create(carro).init("Ferrari");

console.log(ferrari.acelerar());

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  capacete: true,
};

Object.assign(moto, funcaoAutomovel);
console.log(moto);

// Propriedades imutaveis
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false,
    writable: false,
    enumerable: true,
  },
  espelhos: {
    enumerable: true,
    get() {
      return this._espelhos;
    },
    set(valor) {
      this._espelhos = valor * 4 + " Total rodas";
    },
  },
});

moto.rodas = 5;
console.log(moto);

console.log(Object.getOwnPropertyDescriptors(Array));
// console.log(Object.getOwnPropertyDescriptors(window))
console.log(Object.getOwnPropertyDescriptors(moto));

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  "innerHeight"
);
console.log(innerHeightConfig.configurable);

console.log(Object.keys(moto));
console.log(Object.values(moto));
console.log(Object.entries(moto));

console.log(Object.getOwnPropertyNames(Array.prototype));

const frutas = ["Banana"];
console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype);

const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];
const novafruta = frutas1;

console.log(Object.is(frutas1, frutas2));
console.log(Object.is(frutas1, novafruta));

const carro2 = {
  marca: "Ford",
  ano: 2018,
};
Object.freeze(carro2); // impede qualquer mudança nas propriedades.
Object.seal(carro2); // previne a adição de novas propriedades e impede que as atuais sejam deletadas.
Object.preventExtensions(carro2); // previne a adição de novas propriedades.

console.log(Object.isFrozen(carro2)); // true
console.log(Object.isSealed(carro2)); // true
console.log(Object.isExtensible(carro2)); // true

console.log(frutas.constructor); // Array
console.log(moto.constructor); // objeto
const frase = "Isso é uma String";
console.log(frase.constructor); // String

frutas.hasOwnProperty("map"); // false
Array.hasOwnProperty("map"); // false
Array.prototype.hasOwnProperty("map"); // true

Array.prototype.propertyIsEnumerable("map"); // false
window.propertyIsEnumerable("innerHeight"); // true

const frutas_ = ["Banana", "Uva"];
const frase_ = "Oi frase";
const somar_ = function (a, b) {
  return a + b;
};

const carro_ = {
  marca: "Honda",
};

console.log(frutas_.toString());
console.log(frase_.toString());
console.log(somar_.toString());
console.log(carro_.toString());

console.log(Object.prototype.toString.call(frutas_));
console.log(Object.prototype.toString.call(frase_));
console.log(Object.prototype.toString.call(somar_));
console.log(Object.prototype.toString.call(carro_));

// EXERCICIOS
// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(nome) {
  return Object.prototype.toString.call(nome);
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  },
});

console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));
