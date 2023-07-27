"use strict";
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    console.log(data);
    somarVendas(data);
}
fetchVendas();
function somarVendas(data) {
    let total1 = 0;
    for (let i = 0; i < data.length; i++) {
        total1 += data[i][1];
    }
    document.body.innerHTML += `
  <p>Total: ${total1}</p>`;
    const total2 = data.reduce((total, venda) => {
        console.log(total);
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `
  <p>Total: ${total2}</p>`;
}
