// const carro = {
//   marca: "Marca",
//   preco: 0,
// };

// const honda = carro;
// honda.marca = "Honda";
// honda.preco = 2000;

// const fiat = carro;
// fiat.marca = "Fiat";
// fiat.preco = 2000;

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 4000);

function Carro2(marcaAtribuida, precoInicial) {
  const taxa = 1.2
  const precoFinal = precoInicial * taxa
  this.marca = marcaAtribuida
  this.preco = precoFinal
}

const bmw = new Carro2("BMW", 5000)


