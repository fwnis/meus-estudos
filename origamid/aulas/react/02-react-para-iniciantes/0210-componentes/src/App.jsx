import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./form/Form";

const Teste = () => {
  const active = true
  if (active) {
    return <p>Teste</p>
  } else {
    return null
  }
}

const App = () => {
  return (
    <React.Fragment>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default App;
