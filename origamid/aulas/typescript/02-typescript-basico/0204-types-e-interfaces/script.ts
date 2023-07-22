interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();

function showProduct(data: Produto) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <p>${data.descricao}</p>
      <p>Tempo de garantia: ${data.garantia}</p>
      <p>Possui seguro para acidentes: ${
        data.seguroAcidentes ? "Sim" : "Não"
      }</p>
      <div>
      <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
      <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}
