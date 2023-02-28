const elemento = document.querySelector("p");
const texto = elemento.innerText;

console.log(texto);

if (texto.toUpperCase === "HTML") {
  console.log("Executar código");
}
