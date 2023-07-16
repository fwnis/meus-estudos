import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.css";

const Header = () => {
  return (
    <div>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="sobre">Sobre</NavLink>
      <NavLink to="contato">Contato</NavLink>
      <NavLink to="login">Login</NavLink>
      <p>Esse é o Header</p>
    </div>
  );
};

export default Header;
