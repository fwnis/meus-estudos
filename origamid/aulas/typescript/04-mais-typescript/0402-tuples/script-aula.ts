const produto1 = ["Notebook", 2500];
const produto2: [string, number] = ["Notebook", 2500];

produto2[0].toLowerCase();
produto2[1].toFixed();

if (typeof produto1[0] === "string") {
  console.log(produto1[0].toLowerCase());
}

const [nome, preco] = produto2;
nome;
preco;

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button = getText("button");
console.log(button);
