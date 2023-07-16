import React from "react";
import { styled } from "styled-components";

const Container = styled.footer`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #666;
  height: 10rem;
  padding-top: 5rem;
  box-sizing: border-box;
`

const Footer = () => {
  return <Container>
    <p>Ranek. Todos os direitos reservados.</p>
  </Container>;
};

export default Footer;
