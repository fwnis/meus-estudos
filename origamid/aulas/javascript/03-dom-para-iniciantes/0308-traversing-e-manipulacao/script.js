// const h1 = document.querySelector("h1");

// h1.outerHTML; // todo o html do elemento
// h1.innerHTML; // html interno
// h1.innerText; // texto, sem tags

// h1.innerText = "<h1>Texto</h1>"; // a tag vai como texto
// h1.innerHTML = "<h1>Texto</h1>"; // a tag é renderizada

// const lista = document.querySelector(".animais-lista");

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// lista.querySelectorAll("li"); // todas as LI's
// lista.querySelector("li:last-child"); // último filho

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector("li:last-child"));

// console.log(lista.childNodes);

// lista.previousElementSibling; // elemento acima
// lista.previousSibling; // node acima

// lista.firstChild; // primeiro node child
// lista.firstElementChild; // primeiro elemento child
// lista.childNodes; // todos os node child

// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = document.querySelector(".titulo");
// const dados = document.querySelector(".dados");

// const mapa = document.querySelector(".mapa");

// animais.appendChild(titulo)
// contato.replaceChild(mapa, lista)

// contato.removeChild(dados)

// contato.insertBefore(animais, mapa)

// const novoh1 = document.createElement("h1")
// novoh1.innerText = "Novo Título"
// novoh1.classList.add("titulo")

// mapa.appendChild(titulo)

// const H1 = document.querySelector("h1");
// const faq = document.querySelector(".faq");

// const cloneH1 = H1.cloneNode(true);


// cloneH1.classList.add("azul")
// faq.appendChild(cloneH1)

// EXERCICIO
// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu")
const copy = document.querySelector(".copy")

const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq")
const primeiroDt = faq.querySelector("dt")
console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling
console.log(proximoDD)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais")
faq.innerHTML = animais.innerHTML

