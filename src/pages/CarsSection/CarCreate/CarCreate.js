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
    const [currentModel, setCurrentModel] = useState("");
    const [currentColor, setCurrentColor] = useState("");
    const [price, setPrice]= useState("");
    const [releaseYear, setReleaseYear]= useState("");

    
   
   

    const handleSubmit = (e) => {
        e.preventDefault();
       
    
        const values = {
            modelFk: 1, 
            colorFk: 1,
            price:price, 
            releaseYear:releaseYear,
            plantFk:7,
            availability:true
        }
        console.log(values)
        axios.post(
            'http://localhost:58475/api/cars/', values, { withCredentials: true }
        )
            .then((response) => {
                response.status === 201 && props.addCar(response.data) 
            })
            .catch(console.error);

        
    };
  
   
    const handleSetModel = (data) => {
        setModel(data);
        
    }
    const handleSetColor = (data) => {
        setColor(data);
    }
   
    return (
      
    <React.Fragment>
     <h1 className='h1'>Добавление нового авто</h1>
    <div >
    <form className='form-container1' onSubmit={handleSubmit}>
    <div className='fields'>
          
         <Model className='combobox' models={models} setModel={handleSetModel} currentModel={currentModel} setCurrentModel={setCurrentModel}/>
         
         <Color className='combobox' colors={colors} setColor={handleSetColor} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
         <ReleaseYear className='date' releaseYear={releaseYear} setReleaseYear={setReleaseYear}/>
         <Price className='label' price={price} setPrice={setPrice}/>
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