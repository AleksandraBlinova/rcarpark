import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

const FormSignIn = () => {


  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
      e.preventDefault();
      const value = { "email": "user@mail.com", "password": "Aa123456!" };
     
      axios.post(
          'http://localhost:58475/api/Account/Login', value, { withCredentials: true }
      )
          .then((response) => {
              typeof response.data.error !== "undefined" && setErrors(response.data.error)
          })
          .catch(console.error);
  };


return (
   <div className="form-container">
   <img src="mobile_ksp_1800x809_design.jpg" alt="promo" className="form-img"/>
            {errors}
            {/* {showErrors()} */}
            {errors.forEach(({ errorValue, index }) => (
                <div className="AuthText" key={"error"+index}>
                    {errorValue}
                </div>
            ))}
            <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
            <h1>Авторизация</h1>
            <div className="form-inputs">
            <label htmlFor='email' 
            className='form-label'>
            Email
            </label>
            <input
            type="email"
            name="email"
            className='form-input'
            placeholder="Введите ваш email" 
            />
         
        </div>

            <div className="form-inputs">
            <label htmlFor='password' 
            className='form-label'>
            Пароль
            </label>
            <input
            type="password"
            name="password"
            className='form-input'
            placeholder="Пароль" 
            />
          
            
        </div>
               
        <button className="form-input-btn" type="submit" href='/si'>Войти</button>
        <span className="form-input-login">
        Вернуться на страницу регистрации можно<a href ="/signin"> здесь</a>
       
        </span>
            </form>
            </div>
            <a href='/' className="close-btn">x</a>
        </div>
);
};

export default FormSignIn;