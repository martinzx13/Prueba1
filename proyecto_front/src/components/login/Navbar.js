import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
// Creacion de la barra de Navegacion
const Navbar = () => {
  return (
    <>
      {/* Componente principal de la barra de navegación */}
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
          {/* <img src="" alt="" /> Logo */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/about" activeStyle>
            Services
          </NavLink>
          <NavLink to="/about" activeStyle>
            Contact-Us
          </NavLink>
          <NavLink to="/about" activeStyle>
            Sign-Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign In"> Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;
