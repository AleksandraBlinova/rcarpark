import React,{ useState, useEffect } from 'react'
import Price from '../CarChange/Price';
import Model from '../CarChange/Model';
import Photo from '../CarChange/Photo';
import Color from '../CarChange/Color';
import ReleaseYear from '../CarChange/ReleaseYear';
import './CarChange.css';
import axios from 'axios';

function CarChange  ({currentcar, editCar})  {

    const [price, setPrice] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [models, setModel] = useState([]);
    const [colors, setColor] = useState([]);
    const [currentModel, setCurrentModel] = useState("");
    const [currentColor, setCurrentColor] = useState("");
    const [currentIdM, setCurrentModelId] = useState("");
    const [currentIdC, setCurrentColorId] = useState("");
    const [car, setCar] = useState(currentcar)
  
    useEffect(
    () => {
       
        setCar(currentcar)
        

    },
    [currentcar] 
)


const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
        price:car.price, 
        releaseYear:car.releaseYear
       
    }
    axios.put(
        'http://localhost:58475/api/cars/', values, { withCredentials: true }
    )
        .then((response) => {
            response.status === 204 && editCar(response.data) 
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
     <h1 className='h1'>Редактирование авто</h1>
    <div className='car-change'>
    <form className='form-container2' onSubmit={handleSubmit}>
    <div className='fields'>
          
         <Model className='combobox' currentModel={car.model1} setCurrentModel={car.model1} 
         models={models} setModel={handleSetModel} />

         <Color className='combobox' currentColor={car.color1} setCurrentColor={car.color1}
         colors={colors} setColor={handleSetColor} />
         <ReleaseYear className='date' releaseYear={car.releaseYear} setReleaseYear={car.releaseYear} />
         <Price className='label' price={car.price} setPrice={car.price} />
         
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
