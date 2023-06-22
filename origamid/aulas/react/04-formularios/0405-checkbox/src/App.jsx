import React from "react";

// const App = () => {
//   const [termos, setTermos] = React.useState(false);

//   return (
//     <form>
//       {termos && <p>Aceitou os termos.</p>}
//       <label>
//         <input
//           type="checkbox"
//           value="termos"
//           checked={termos}
//           onChange={({ target }) => setTermos(target.checked)}
//         />
//         Aceito os termos.
//       </label>
//     </form>
//   );
// };

// const App = () => {
//   const [cores, setCores] = React.useState("vermelho");

//   function handleChange({ target }) {
//     if (target.checked) setCores([...cores, target.value]);
//     else setCores(cores.filter((cor) => cor !== target.value));
//   }

//   function checkColor(cor) {
//     return cores.includes(cor);
//   }

//   return (
//     <form>
//       <label>
//         <input
//           type="checkbox"
//           value="azul"
//           checked={checkColor("azul")}
//           onChange={handleChange}
//         />
//         Azul
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           value="vermelho"
//           checked={checkColor("vermelho")}
//           onChange={handleChange}
//         />
//         Vermelho
//       </label>
//     </form>
//   );
// };

const App = () => {
  const [cores, setCores] = React.useState("vermelho");

  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) setCores([...cores, value]);
    else setCores(cores.filter((cor) => cor !== value));
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor, index) => (
        <label key={index} style={{ textTransform: "capitalize" }}>
          <input
            type="checkbox"
            value={cor}
            checked={checkColor(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};

export default App;
