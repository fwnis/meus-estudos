import React from "react";
import UserContext from "./UserContext";
import { GlobalContext } from "./GlobalContext";

// const Produto = () => {
//   const dados = React.useContext(UserContext);

//   console.log(dados);

//   return <div>{dados.nome}</div>;
// };

// const Produto = () => {
//   const global = React.useContext(GlobalContext);

//   return (
//     <div>
//       Produto {global.contar}
//       <button onClick={global.adicionarUm}>Adicionar 1</button>
//       <button onClick={global.adicionarDois}>Adicionar 2</button>
//     </div>
//   );
// };

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);

  if (dados === null) return null;
  return (
    <div>
      Produtos:{" "}
      {dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default Produto;
