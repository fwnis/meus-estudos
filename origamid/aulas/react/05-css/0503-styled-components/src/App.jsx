import React from "react";
import styled from "styled-components";

const ProductsContainer = styled.div`
  display: flex;
`;

const Product = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Price = styled.p`
  background: ${({ cor }) => cor};
  color: white;
`;

const Buy = styled.button`
  background: ${({ active }) => (active ? "#000" : "#fff")};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ active }) => (active ? "#fff" : "#000")};
  cursor: pointer;
  &:hover {
    background: tomato;
  }
`;

const App = () => {
  const [active, setActive] = React.useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <ProductsContainer>
        <Product>
          <Title>Notebook</Title>
          <Paragraph>Paragraph</Paragraph>
          <Price cor="#84e">R$ 20000</Price>
          <Buy active={active} onClick={handleClick}>
            Comprar
          </Buy>
        </Product>
        <Product>
          <Title>Smartphone</Title>
          <Paragraph>Paragraph</Paragraph>
          <Price cor="#53d956">R$ 20000</Price>
          <Buy active={active} onClick={handleClick}>
            Comprar
          </Buy>
        </Product>
      </ProductsContainer>
    </div>
  );
};

export default App;
