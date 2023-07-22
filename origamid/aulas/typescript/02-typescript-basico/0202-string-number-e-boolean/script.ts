const frase: string = "Front End";
const preco: number = 500;
const condicao: boolean = preco > 100;

console.log(typeof frase);

if (typeof frase === "string") {
  frase.toLowerCase();
  console.log("Frase é uma string");
}

const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";

console.log(frase1);
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
