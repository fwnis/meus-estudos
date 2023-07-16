import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {

  return (
    <div>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="sobre">Sobre</NavLink>
      <NavLink to="contato">Contato</NavLink>
      <p>Esse é o Header</p>
    </div>
  );
};

export default Header;
