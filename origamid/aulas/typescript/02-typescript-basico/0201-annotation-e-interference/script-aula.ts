let produto: string = "Livro";
let preco: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

const barato: boolean | string = preco < 400 ? true : "produto caro";

function somar(a: number, b: number): string {
  return `${a + b}`;
}

somar(4, 10);

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$ " + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
