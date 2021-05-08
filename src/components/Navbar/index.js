import React,{useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink
} from './NavbarElements'
import axios from 'axios'
import { result } from 'lodash';


const Navbar = (props) => {

 console.log('f', props.role)
   const [errors, setErrors] = useState([]);
   const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post(
        'http://localhost:58475/api/Account/LogOff', { withCredentials: true }
    )
        .then((response) => {
            typeof response.data.error !== "undefined" && setErrors(response.data.error)
           if(response.data.message==='Выполнен выход.')
           props.setRole(0)
            
        })
        .catch(console.error);

};
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
          {(props.role===1) &&
          <NavLink to="/liked"  >
          ❤
        </NavLink>
          }
        </NavMenu>
        
        {(props.role===0) &&
          <NavBtn>
          <NavBtnLink to="/signin">Войти</NavBtnLink>
          </NavBtn>
        }
        {(props.role===1 || props.role===2) &&
          <NavBtn onClick={handleSubmit} >
          <NavBtnLink to="/logout">Выйти</NavBtnLink>
          </NavBtn>
        }
       
      </Nav>
    </>
  );
};


export default Navbar;