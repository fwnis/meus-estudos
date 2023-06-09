import React from "react";
import Produto from "./Produto";

// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   const [dados, setDados] = React.useState(null);

//   // React.useEffect(() => {
//   //   console.log("Executou");
//   // }, []);

//   // React.useEffect(() => {
//   //   document.title = "Clicou " + contar;
//   // }, [contar]);

//   // React.useEffect(() => {
//   //   fetch(`https://ranekapi.origamid.dev/json/api/produto/notebook`)
//   //     .then((response) => response.json())
//   //     .then((json) => setDados(json));
//   // }, []);
//   const [ativo, setAtivo] = React.useState(false);

//   return (
//     <div>
//       {/* {dados && (
//         <div>
//           <h1>{dados.nome}</h1>
//           <p>R$ {dados.preco * contar}</p>
//         </div>
//       )}
//       <button onClick={() => setContar(contar + 1)}>{contar}</button> */}
//       {ativo && <Produto />}
//       <button onClick={() => setAtivo(!ativo)}>Ativar</button>
//     </div>
//   );
// };

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) {
      window.localStorage.setItem("produto", produto);
    }
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
