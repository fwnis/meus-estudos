declare global {
  interface Usuario {
    nome: string;
    id: number;
  }
}

export const livro: Produto = {
  nome: "Livro",
  preco: 200,
};
