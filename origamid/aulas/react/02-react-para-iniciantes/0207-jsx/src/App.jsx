import React from "react";

// const App = () => {
//   const nome = "Eduardo";
//   const ativo = true;
//   const numero = Math.random();
//   const titulo = <h1>Isso é um título</h1>;

//   function mostrarNome(sobrenome) {
//     return "Eduardo" + sobrenome;
//   }

//   const carro = {
//     marca: "Ford",
//     rodas: "4",
//   };

//   const estiloP = {
//     color: "blue",
//     fontSize: "2rem",
//   };

//   return (
//     <>
//       {titulo}

//       <a className="ativo" href="https://origamid.com" title="Isso é um site">
//         Origamid
//       </a>

//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome" />

//       <p className={ativo ? "ativo" : "inativo"}>{nome}</p>

//       <p>{mostrarNome("Fanis")}</p>

//       <p style={estiloP}>{new Date().getFullYear()}</p>

//       <p>{(numero * 2000) / 50}</p>

//       <p>{carro.marca}</p>
//       <p>{carro.rodas}</p>
//     </>
//   );
// };

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? " Ativa" : " Inativa"}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  );
};

export default App;
