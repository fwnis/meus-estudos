import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./Components/Produtos";
import Contato from "./Components/Contato";
import Produto from "./Components/Produto";
import Header from "./Components/Header";
import { styled } from "styled-components";
import Footer from "./Components/Footer";

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Container = styled.div`
  display: grid;
  width: 800px;
  margin: 1rem auto;
`;

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto/:id" element={<Produto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default App;
