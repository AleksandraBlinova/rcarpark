import React,{ useState } from 'react'
import Price from '../CarChange/Price';
import Model from '../CarChange/Model';
import Photo from '../CarChange/Photo';
import Color from '../CarChange/Color';
import ReleaseYear from '../CarChange/ReleaseYear';
import './CarChange.css';
import axios from 'axios';

function CarChange  (props)  {

    const [price, setPrice]= useState("");
    const [releaseYear, setReleaseYear]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       
    
        const values = {
           
            price:price, 
            releaseYear:releaseYear
           
        }
     
        axios.put(
            'http://localhost:58475/api/cars/', values, { withCredentials: true }
        )
            .then((response) => {
                response.status === 204 && props.editCar(response.data) 
            })
            .catch(console.error);

        
    };

    return (
        <React.Fragment>
     <h1 className='h1'>Редактирование авто</h1>
    <div className='car-change'>
    <form className='form-container2' onSubmit={handleSubmit}>
    <div className='fields'>
          
          
         <ReleaseYear className='date' releaseYear={releaseYear} setReleaseYear={setReleaseYear}/>
         <Price className='label' price={price} setPrice={setPrice}/>
         
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
