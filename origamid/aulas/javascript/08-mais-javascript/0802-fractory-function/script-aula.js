function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    text,
    element,
  };
}

const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }

  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
    nadar,
  });
}

const eduardo = criarPessoa("Eduardo", "Fanis");

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`
}

const designer = Pessoa("Eduardo")

console.log(designer.andar())
