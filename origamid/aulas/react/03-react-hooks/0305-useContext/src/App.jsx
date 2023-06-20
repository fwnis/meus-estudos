import React from "react";
// import UserContext from "./UserContext";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";
import Limpar from "./Limpar";

// const App = () => {
//   return (
//     <UserContext.Provider value={{ nome: "Eduardo" }}>
//       <Produto />
//     </UserContext.Provider>
//   );
// };

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default App;
