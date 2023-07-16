import React from "react";
import styles from "./App.css";
import foto from "./img/foto.jpg";
import { ReactComponent as Dog } from "./img/dog.svg";
import DogSvg from "./DogSvg";

const App = () => {
  const [olho, setOlho] = React.useState(0);

  const handleClick = () => {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 30 * i);
    }
  };

  return (
    <div>
      <p className="fundo" onClick={handleClick}></p>
      <DogSvg color="#84e" olho={olho} />
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default App;
