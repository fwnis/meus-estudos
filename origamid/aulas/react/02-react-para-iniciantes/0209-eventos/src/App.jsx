import React from "react";

const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  function handleScroll(event) {
    console.log(event);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div style={{height: '200vh'}}>
      <button onClick={(event) => console.log(event.target)}>Clique</button>
    </div>
  );
};

export default App;
