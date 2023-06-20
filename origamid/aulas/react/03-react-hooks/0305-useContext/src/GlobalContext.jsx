import React from "react";

export const GlobalContext = React.createContext();

// export const GlobalStorage = ({ children }) => {
//   const [contar, setContar] = React.useState(0);

//   function adicionarUm() {
//     setContar((contar) => contar + 1);
//   }

//   function adicionarDois() {
//     setContar((contar) => contar + 2);
//   }

//   return (
//     <GlobalContext.Provider value={{ contar, adicionarUm, adicionarDois }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
    .then((response) => response.json()
    .then((json) => setDados(json))
    );
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, setDados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
