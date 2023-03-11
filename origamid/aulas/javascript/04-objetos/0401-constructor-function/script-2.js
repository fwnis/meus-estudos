// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     const elementoSelecionado = this.element();
//     elementoSelecionado.classList.add("ativar");
//   },
// };
// Dom.ativar();
// Dom.seletor = "ul";
// Dom.ativar();

function Dom(seletor) {
  (this.element = function () {
    return document.querySelector(seletor);
  }),
    (this.ativar = function (classe) {
      this.element().classList.add(classe);
    });
}

const li = new Dom("li");
const ul = new Dom("ul");

const lastLi = new Dom("li:last-child");
lastLi.ativar("ativar");
