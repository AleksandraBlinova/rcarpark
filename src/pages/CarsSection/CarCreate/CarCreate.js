import React, { useState } from 'react';
import axios from 'axios';
import './CarCreate.css';
import Price from './Price';
import Model from './Model';
import Photo from './Photo';
import Color from './Color';
import ReleaseYear from './ReleaseYear';
import PropTypes from 'prop-types';

function CarCreate (props)  {
   
    const [models, setModel] = useState([]);
    const [colors, setColor] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target.elements.url;
        axios.post('https://localhost:58475/api/cars/', { url: value })
            .then((response) => {
                response.status = 201 && props.addCar(response.data) 
            })
            .catch(console.error);
    };
   
    
   
    return (
      
    <React.Fragment>
     <h1 className='h1'>Добавление нового авто</h1>
    <div >
    <form className='form-container1' onSubmit={handleSubmit}>
    <div className='fields'>
          
         <Model className='combobox' models={(models.map(i=>(i.model1)))} setModel={setModel}/>
         
         <Color className='combobox' colors={(colors.map(i=>(i.color1)))} setColor={setColor}/>
         <ReleaseYear className='date'/>
         <Price className='label'/>
         <Photo className='label'/>
        <div>
        <button className='btn-2' type="submit">Создать</button>
        </div>

 
    </div>
    </form>
    </div>

           
    </React.Fragment >
    )
}


CarCreate.propTypes = {
    addCar: PropTypes.func.isRequired,
};
export default CarCreate;