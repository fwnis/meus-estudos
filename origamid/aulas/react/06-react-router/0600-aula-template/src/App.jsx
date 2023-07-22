import React from "react";

const App = () => {
  async function handleFetch(url) {
    const response = await fetch(url, { mode: "no-cors" });
    const json = await response.json();
    console.log(json);
  }

  return (
    <button onClick={() => handleFetch("http://localhost:3000/filmes")}>
      App
    </button>
  );
};

export default App;
