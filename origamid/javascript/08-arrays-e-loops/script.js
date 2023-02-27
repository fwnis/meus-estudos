// array
const lista = ["JavaScript", "HTML", "CSS"];

console.log(lista);

const js = lista[0];
const html = lista[1];
const css = lista[2];

console.log(html);


// loop
const lista2 = ["JavaScript", "HTML", "CSS"];
const body = document.querySelector("body");

// index++ = (index = index + 1)

for (let index = 0; index < lista2.length; index++) {
  console.log(lista[index])
  const item = lista2[index];
  body.innerHTML += "<li>" + lista2[index] + "</li>";
}