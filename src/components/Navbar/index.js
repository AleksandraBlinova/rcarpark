import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink
} from './NavbarElements'


const Navbar = () => {
  return(
    <>
      <Nav>
        <NavLink to ="/">
         <img src="favicon.ico"
         style={{width: 60, height: 60}} alt="logo"/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/offers" >
            Предложения
          </NavLink>
          <NavLink to="/models" >
            Модельный ряд
          </NavLink>
          <NavLink to="/contacts" >
            Контакты
          </NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to="/signin">Войти</NavBtnLink>
      </NavBtn>
      </Nav>
    </>
  );
};


export default Navbar;