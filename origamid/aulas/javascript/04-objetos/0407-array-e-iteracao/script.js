const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

console.log(instrumentos); // ['Guitarra', 'Baixo', 'Violão']
console.log(instrumentos[2]); // Violão

console.log(precos); // [49, 99, 69, 89]
console.log(precos[3]); // 89

console.log(dados[0]); // String {'Tipo 1'}
console.log(dados[0].toUpperCase()); // TIPO 1

dados[2]("Eu mesmo"); // Eu mesmo
console.log(dados[1]); // ['Carro', 'Portas', {…}]

const carros = new Array("ford", "fiat", "honda");

carros[2] = "ferrari";
carros[20] = "kia";

console.log(carros.length); // 21

const li = document.querySelectorAll("li");

const arrayLi = Array.from(li);

const obj = {
  0: "Andre",
  1: "Rafael",
  2: "Teste",
  length: 4,
};

const objArray = Array.from(obj);

console.log(li); // NodeList(3) [li, li, li]
console.log(arrayLi); // (3) [li, li, li]

console.log(obj); // {0: 'Andre', 1: 'Rafael', 2: 'Teste', length: 4}
console.log(objArray); // (4) ['Andre', 'Rafael', 'Teste', undefined]

console.log(Array.isArray(li)); // False
console.log(Array.isArray(arrayLi)); // True

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
console.log(frutas.length); // 3
console.log(frutas[1].length); // 4
console.log(frutas[2][0].length); // 8

const instrumentos2 = ["Guitarra", "Baixo", "Violão"];
instrumentos2.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();

console.log(instrumentos2); // ['Baixo', 'Guitarra', 'Violão']
console.log(idades); // [1, 12, 21, 32, 33, 43, 8]

const carros2 = ["Ford", "Fiat", "VW"];
carros2.unshift("Kia", "Ferrari");
carros2.push("Parati", "Gol");

console.log(carros2); // ['Kia', 'Ferrari', 'Ford', 'Fiat', 'VW', 'Parati', 'Gol']

console.log(carros2.pop()); // Gol
console.log(carros2); // ['Kia', 'Ferrari', 'Ford', 'Fiat', 'VW', 'Parati']

console.log(carros2.shift()); // Kia
console.log(carros2); // ['Ferrari', 'Ford', 'Fiat', 'VW', 'Parati']

console.log(carros2.reverse()); // ['Parati', 'VW', 'Fiat', 'Ford', 'Ferrari']

const carros3 = ["Ford", "Kia", "VW", "Honda"];
console.log(carros3); // ['Ford', 'Kia', 'VW', 'Honda']
console.log(carros3.splice(2, 1, "Fusca")); // ['VW']
console.log(carros3); // ['Ford', 'Kia', 'Fusca', 'VW', 'Honda']

console.log(["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3)); // ['Item1', 'Item2', 'Item1', 'Item2']

console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana")); // ['Banana', 'Banana', 'Banana', 'Banana']

console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2)); // ['Item1', 'Item2', 'Banana', 'Banana']

console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3)); // ['Item1', 'Banana', 'Banana', 'Item4']

const transportes1 = ["Barco", "Aviao"];
const transportes2 = ["Carro", "Moto"];
const transportes = transportes1.concat(transportes2);
console.log(transportes); // ['Barco', 'Aviao', 'Carro', 'Moto']

const maisTransportes = ["Oi"].concat(transportes1, transportes2, "Van");
console.log(maisTransportes); // ['Oi', 'Barco', 'Aviao', 'Carro', 'Moto', 'Van']

const linguagens = ["html", "css", "js", "php", "python", "js"];

console.log(linguagens.includes("css")); // true
console.log(linguagens.includes("ruby")); // false
console.log(linguagens.indexOf("python")); // 4
console.log(linguagens.indexOf("js")); // 2
console.log(linguagens.lastIndexOf("js")); // 5

const linguagens2 = ["html", "css", "js", "php", "python"];
console.log(linguagens2.join()); // 'html,css,js,php,python'
console.log(linguagens2.join(" ")); // 'html css js php python'
console.log(linguagens2.join("-_-")); // 'html-_-css-_-js-_-php-_-python'

let htmlString = "<h2>Título Principal</h2>";
console.log(htmlString); // <h2>Título Principal</h2>

htmlString = htmlString.split("h2");
console.log(htmlString); // ['<', '>Título Principal</', '>']

htmlString = htmlString.join("h1");
console.log(htmlString); // <h1>Título Principal</h1>

const linguagens3 = ["html", "css", "js", "php", "python"];
console.log(linguagens3.slice(3)); // ['php', 'python']
console.log(linguagens3.slice(1, 4)); // ['css', 'js', 'php']

const cloneLinguagens = linguagens2.slice();
console.log(cloneLinguagens); // ['html', 'css', 'js', 'php', 'python']

// EXERCICIO
const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiraComida = comidas.shift()
const ultimaComida = comidas.pop()
console.log(comidas);
comidas.push("Arroz");
comidas.unshift("Peixe");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort(); // ['Brenda', 'Joana', 'Julia', 'Kleber', 'Marcio']
estudantes.reverse(); // ['Marcio', 'Kleber', 'Julia', 'Joana', 'Brenda']
console.log(estudantes)
console.log(estudantes.includes("Joana")); // True
console.log(estudantes.includes("Juliana")); // False

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("section").join("ul").split("div").join("li");
console.log(html);

const carros4 = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopia = carros4.slice();
console.log(carros4.pop()); // Honda
console.log(carros4); // ['Ford', 'Fiat', 'VW']

console.log(carrosCopia);
