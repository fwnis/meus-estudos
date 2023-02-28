const lista = ["JavaScript", "HTML", "CSS"];

function logarItems(item, index) {
  console.log(item, "no index:", index);
}

lista.forEach(logarItems);

// vc pode escrever a funcao no argumento:
lista.forEach(function (item, index) {
  console.log(item, "no index:", index);
});

// li
const lista2 = ["JavaScript", "HTML", "CSS", "PHP"];
const body = document.querySelector("body");

function adicionarBody(item) {
  body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(adicionarBody);
