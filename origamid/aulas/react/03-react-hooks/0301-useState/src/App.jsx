import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
import Produto from "./Produto";

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

// const App = () => {
//   const [modal, setModal] = React.useState(true);
//   const [items, setItems] = React.useState("Teste")

//   function handleClick() {
//     setItems("Outro")
//   }

//   return (
//     <div>
//       <p>{items}</p>
//       <button onClick={handleClick}>Clicar</button>
//       <Modal modal={modal} setModal={setModal} />
//       <ButtonModal setModal={setModal} />
//     </div>
//   );
// };

// const App = () => {
//   const [contar, setContar] = React.useState(1);
//   const [items, setItems] = React.useState(["Item 1"]);

//   function handleClick() {
//     setContar(contar + 1);
//     setItems([...items, "Item " + (contar + 1)]);
//   }

//   return (
//     <div>
//       {items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//       <button onClick={handleClick}>{contar}</button>
//     </div>
//   );
// };

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
