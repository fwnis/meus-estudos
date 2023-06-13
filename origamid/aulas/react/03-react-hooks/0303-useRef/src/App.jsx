import React from "react";

// const App = () => {
//   const [comentarios, setComentarios] = React.useState(["Teste", "Teste2"]);
//   const [input, setInput] = React.useState("teste");
//   const inputElement = React.useRef();

//   function handleClick() {
//     setComentarios([...comentarios, input]);
//     setInput("");
//     inputElement.current.focus();
//   }

//   return (
//     <div>
//       <ul>
//         {comentarios.map((comentario, index) => (
//           <li key={index}>{comentario}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         ref={inputElement}
//         value={input}
//         onChange={({ target }) => setInput(target.value)}
//       />
//       <button onClick={handleClick}>Enviar</button>
//     </div>
//   );
// };

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho");

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;
