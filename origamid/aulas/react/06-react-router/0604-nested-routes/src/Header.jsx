import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Mudou a rota");
  }, [location]);

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
