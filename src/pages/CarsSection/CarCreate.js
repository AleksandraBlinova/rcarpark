import React from 'react';
import axios from 'axios';

import './CarCreate.css'
const CarCreate = ({ addCar }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target.elements.url;
        axios.post('https://localhost:44396/api/cars/', { url: value })
            .then((response) => {
                response.status = 201 ? addCar(response.data) : null;
            })
            .catch(console.error);
    };

    return (
        <React.Fragment>
            <h1 className='h1'>Добавление нового авто</h1>
            <form className='form-container' onSubmit={handleSubmit}>
            <div >
            <div className='input-css'>
            <label className='label'>Модель: </label>
            <input  type="text" name="model" placeholder="Выберите модель:" />
            </div>  
            <div className='input-css'>
            <label className='label'>Цвет: </label>
            <input  type="text" name="color" placeholder="Выберите цвет:" />
            </div>  
            <div className='input-css'>
            <label className='label'>Цена: </label>
            <input  type="text" name="price" placeholder="Введите цену:" />
            </div>  
            <div className='input-css'>
            <label className='label'>Год выпуска: </label>
            <input type="text" name="releaseYear" placeholder="Введите год выпуска:" />
            </div>
            <button className='create-btn' type="submit">Создать</button>
            </div>
              
            </form>
        </React.Fragment >
    )
}

export default CarCreate;