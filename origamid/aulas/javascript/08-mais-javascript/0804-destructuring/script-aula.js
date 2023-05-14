const carro = {
  marca: "Honda",
  ano: 2023,
};

const { marca, ano } = carro;

console.log(marca, ano);

const cliente = {
  nome: "Eduardo",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

const {
  digitais,
  fisicas,
  digitais: { livros, videos },
} = cliente.compras;

console.log(livros);
console.log(videos);

const frutas = ["Banana", "Uva", "Morango"];

const [primeira, segunda, terceira] = frutas;
console.log(segunda)

function handleKeyboard({key, keyCode}) {
  console.log(key, keyCode)
}

document.addEventListener("keyup", handleKeyboard)
