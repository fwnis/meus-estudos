// Métodos
const curso = {
  nome: "JavaScript",
  completar() {
    console.log(this.nome);
  },
};

curso.completar();

// Eventos
const ativar = document.querySelector(".ativar");

/** @param {MouseEvent} event */
function ativarAoClick(event) {
  console.log(event.currentTarget)
}

ativar.addEventListener('click', ativarAoClick)

console.log(ativar);
