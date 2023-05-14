const contato = document.querySelector("#contato");
const texto = document.querySelector(".texto");
const dados = {}

function handleChange(event) {
  const target = event.target

  // if(!target.checkValidity()) {
  //   target.classList.add("invalido")
  //   contato.nome.setCustomValidity("Preencha este campo")
  //   target.nextElementSibling.innerText = target.validationMessage
  // } else {
  //   target.classList.remove("invalido")
  //   target.nextElementSibling.innerText = ""
  // }
  // console.log(event.target.checkValidity());
  // texto.innerText = event.target.value;

  // document.body.style.backgroundColor = target.value

  // if(target.checked) {
  //   console.log(target.checked)
  // }

  dados[target.name] = target.value
  console.log(dados)
}

contato.addEventListener("change", handleChange);
