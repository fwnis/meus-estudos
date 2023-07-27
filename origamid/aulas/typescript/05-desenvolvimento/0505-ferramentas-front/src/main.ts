import _ from "lodash";
import Clipboard from "clipboard";

const button = new Clipboard("button");

function handleCopy(event: Clipboard.Event) {
  event.clearSelection();
}

button.on("success", handleCopy);

console.log(_.difference([1, 3, 5, 6], [5, 3, 5, 2]));

interface Produto {
  nome: string;
}

const livro: Produto = {
  nome: "O Senhor dos Anéis",
};

console.log(livro);
