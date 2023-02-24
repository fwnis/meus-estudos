const elemento = document.querySelector("p");

if (elemento || document.querySelector("body")) {
  console.log("teste");
}

if (elemento && document.querySelector("body")) {
  console.log("teste2");
}
