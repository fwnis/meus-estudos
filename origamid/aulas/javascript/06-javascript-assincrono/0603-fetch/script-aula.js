const doc = fetch("./doc.txt");

doc
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body;
    console.log(body);
  });

const cep = fetch("https://viacep.com.br/ws/81550530/json/");

cep
  .then((resolucao) => {
    return resolucao.json();
  })
  .then((body) => {
    console.log(body.bairro);
    const cep = document.querySelector(".cep");
    cep.innerText = body.logradouro;
  });

const css = fetch("./style.css");

css
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    const style = document.createElement("style");
    style.innerHTML = body;
    conteudo.appendChild(style);
  });

const sobre = fetch("./sobre.html");
const div = document.createElement("div");

sobre
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
    console.log(titulo);
  });

const imagem = fetch("./imagem.jpg");

imagem.then((resolucao) => {
  return resolucao.blob();
}).then((body) => {
  const blobUrl = URL.createObjectURL(body)
  console.log(blobUrl)
  const imagemDom = document.querySelector("img")
  imagemDom.src = blobUrl
});

const cep2 = fetch("https://viacep.com.br/ws/81550530/json/");

cep2
  .then((resolucao) => {
    const resolucao2 = resolucao.clone()
    resolucao.text().then((text) => {
      console.log(text)
    });
    resolucao2.json().then((json) => {
      console.log(json)
    });
  })

cep2
  .then((response) => {
    console.log(response.type)
  });
