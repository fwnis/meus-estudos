interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave: keyof Produto;

chave = "preco";

function coordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenadas;

coord = (x: number, y: number) => {
  return {
    x,
    y,
  };
};

interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

let key: keyof Elementos;

function selecionar<Chave extends keyof Elementos>(
  seletor: Chave
): Elementos[Chave] | null {
  return document.querySelector(seletor);
}

selecionar("a")?.href;
selecionar("video")?.volume;

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

async function fetchData<T>(url: string): Promise<T> {
  const base = "https://api.origamid.dev/json";
  const response = await fetch(base + url);
  return await response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: string;
}

function checkInterface<Interface>(
  obj: unknown,
  key: keyof Interface
): obj is Interface {
  if (obj && typeof obj === "object" && key in obj) {
    return true;
  } else {
    return false;
  }
}

async function handleData() {
  const jogo = await fetchData("/jogo.json");
  if (checkInterface<Jogo>(jogo, "desenvolvedora")) {
    console.log(jogo.desenvolvedora.toLowerCase());
  }
  const livro = await fetchData("/livro.json");
  if (checkInterface<Livro>(livro, "autor")) {
    console.log(livro.autor);
  }
}
handleData();
