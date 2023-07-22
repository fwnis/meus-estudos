type NumberOrString = string | number;
let total: NumberOrString = 20;
total = "30";

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}
type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: InterfaceProduto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado: ${dados.preco ? "sim" : "não"}</p>
  </div>`;
}

const computador: InterfaceProduto = {
  nome: "Computador",
  preco: 2000,
  teclado: true,
};

preencherDados(computador);

preencherDados({
  nome: "Notebook",
  preco: 2000,
  teclado: false,
});

type Categorias = "design" | "codigo" | "descod";

function pintarCategoras(categoria: Categorias) {
  if (categoria === "codigo") {
    console.log("Pintar azul");
  }
}

pintarCategoras("codigo");
