import React from 'react';
import axios from 'axios';
import './CarCreate.css';
import Price from './Price';
import Model from './Model';
import Photo from './Photo';
import Color from './Color';
import ReleaseYear from './ReleaseYear';


function CarCreate ({ addCar })  {

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
    <div >
    <form className='form-container1' onSubmit={handleSubmit}>
    <div className='fields'>
          
         <Model className='combobox'/>
         <Color className='combobox'/>
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

export default CarCreate;