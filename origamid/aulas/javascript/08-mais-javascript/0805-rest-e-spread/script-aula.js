function perimetroForma(lado, totalLados = 4) {
  const argArray = Array.from(arguments);
  argArray.forEach((arg) => {
    console.log(arg);
  });
  console.log(argArray);
  return lado * totalLados;
}
perimetroForma(10, 3);
perimetroForma(10);

function rest(...listaArgumentos) {
  console.log(listaArgumentos);
  listaArgumentos.forEach((item) => console.log(item));
}
rest("a", 1, 2, "teste");

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(`${ganhador} ganhou um ${premio}`);
  });
}
const ganhadores = ["Pedro", "João", "Maria"];
anunciarGanhadores("Carro", ...ganhadores);

const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];
const comidas = [...frutas, "Pizza", ...legumes];
console.log(comidas);

const todosOsNumeros = [0, 1, 2, 3, 56, 7, 8, 4];
const numeroMaximo = Math.max(...todosOsNumeros);
console.log(numeroMaximo);

const btns = document.querySelectorAll("button")
const btnArray = [...btns]

console.log(btnArray)
