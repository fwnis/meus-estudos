import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

// const App = () => {
//   const [ativo, setAtivo] = React.useState(false);
//   const [dados, setDados] = React.useState({ nome: "Eduardo", idade: "17" });

//   function handleClick() {
//     setAtivo(!ativo);
//     setDados({ ...dados, faculdade: "Possui Faculdade" });
//   }

//   return (
//     <div>
//       <p>{dados.nome}</p>
//       <p>{dados.idade}</p>
//       <p>{dados.faculdade}</p>
//       <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
//     </div>
//   );
// };

const App = () => {
  const [modal, setModal] = React.useState(true);
  const [items, setItems] = React.useState("Teste")

  function handleClick() {
    setItems("Outro")
  }

  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>Clicar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
