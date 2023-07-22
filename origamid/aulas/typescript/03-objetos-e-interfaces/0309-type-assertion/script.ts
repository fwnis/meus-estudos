const video = document.querySelector(".player") as HTMLVideoElement;

video?.volume;

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Produto>;
}

async function handleProduto() {
  const produto = await fetchProduto();
  console.log(produto.nome);
}

const video2 = document.querySelector("video")!;

const video3 = document.querySelector(".player") as HTMLVideoElement;
const video4 = <HTMLVideoElement>document.querySelector(".player");
const video5 = document.querySelector<HTMLVideoElement>(".player");
