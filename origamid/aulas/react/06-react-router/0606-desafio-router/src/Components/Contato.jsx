import React from "react";
import Head from "./Head";
import foto from "../img/contato.jpg";
import { keyframes, styled } from "styled-components";
// import { styled } from "styled-components";

const animeLeft = keyframes`
to {
  opacity: 1;
  transform: initial;
}
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  opacity: 0;
  transform: translateX(-40px);
  animation: ${animeLeft} 0.3s forwards;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 5px;
  grid-row: 1 / 4;
  grid-column: 1;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
`;

const List = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0;
`;

const Item = styled.li`
  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 2px;
    background: #ddd;
    margin-right: 0.5rem;
  }
`;

const Contato = () => {
  return (
    <>
      <Head title="Contato" description="Página de contato" />
      <Container>
        <Img src={foto} />
        <div>
          <Title>Entre em contato.</Title>
          <List>
            <Item>eduardo.fanis@hotmail.com</Item>
            <Item>99 99999-9999</Item>
            <Item>Rua Ali Perto, 999</Item>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Contato;
