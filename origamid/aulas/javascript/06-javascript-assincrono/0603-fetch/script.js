// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const form = document.querySelector("#cep");
const btn = document.querySelector(".btn");
btn.addEventListener("click", buscaCep);

function buscaCep(event) {
  event.preventDefault();
  const cepValue = form.value;
  const cep = fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
  cep
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      const endereco = document.querySelector(".endereco");
      endereco.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector(".btc");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      btcDisplay.innerText = ("R$" + btcJson.BRL.buy).replace(".", ",");
    });
}

// setInterval(fetchBtc, 1000 * 30)

fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const piadaP = document.querySelector(".piada");
const btnProxima = document.querySelector(".proxima");

function puxarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => r.json())
    .then((piada) => {
      piadaP.innerText = piada.value;
    });
}
btnProxima.addEventListener("click", puxarPiada);

puxarPiada();
