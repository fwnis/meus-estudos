import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  & > a {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    text-decoration: none;
    color: #000;
    background-color: #ececec;
    padding: 0.5rem 0.875rem;
    border-radius: 5px;
  }
  & a:hover, a.active {
    background-color: #d7d7d7;
  }
`;

const Header = () => {
  return (
    <header>
      <Nav>
        <NavLink className="nav-link" to="">
          Produtos
        </NavLink>
        <NavLink className="nav-link" to="contato">
          Contato
        </NavLink>
      </Nav>
    </header>
  );
};

export default Header;
