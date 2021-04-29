import React from 'react'
import Price from '../CarCreate/Price';
import Model from '../CarCreate/Model';
import Photo from '../CarCreate/Photo';
import Color from '../CarCreate/Color';
import ReleaseYear from '../CarCreate/ReleaseYear';
import './CarChange.css';
import axios from 'axios';

const CarChange = () => {
    return (
        <React.Fragment>
     <h1 className='h1'>Редактирование авто</h1>
    <div className='car-change'>
    <form className='form-container2' >
    <div className='fields'>
          
         <Model className='combobox'/>
         <Color className='combobox'/>
         <ReleaseYear className='date'/>
         <Price className='label'/>
         <Photo className='label'/>
        <div >
        <button className='btn-1' type="submit">Применить</button>
        </div>

 
    </div>
    </form>
    </div>

           
    </React.Fragment >
    )
}

export default CarChange
