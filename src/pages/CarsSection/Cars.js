import React, { useState } from 'react';
import './Cars.css'
import Car from './Car.js'
import CarCreate from '../CarsSection/CarCreate/CarCreate'
import Footer from '../../pages/HomeSection/Footer'
import CarChange from '../CarsSection/CarChange/CarChange'
import PropTypes from 'prop-types';
import axios from 'axios';


axios.defaults.withCredentials = true



const Cars = () => {
    const [cars, setCars] = useState([]);
    const addCar = (car) => setCars([...cars, car]);
    const removeCar = (removeId) => setCars(cars.filter(({ Id }) => Id !== removeId));
    const initialFormState = { id: null, price: '', releaseYear: '', model1: '', color1: '', modelid: 0, colorid: 0 }
    const [currentcar, setcurrentCar] = useState(initialFormState)
    
    const editCar = (car) => {
     
            setcurrentCar({ id: car.id, price: car.price,  releaseYear: car.releaseYear, 
               model1: car.modelFkNavigation.model1, color1: car.colorFkNavigation.color1, 
               modelid:car.modelFkNavigation.id, colorid:car.colorFkNavigation.id })
    }
   
 
    return (
      <div>
     
        <Car
          cars={cars}
          setCars={setCars}
          removeCar={removeCar}
        cars={cars}
        editCar={editCar}
           />

       <CarCreate  cars={cars}
       setCars={setCars}/>
       
       <CarChange 
       editCar={editCar}  
       cars={cars} 
       currentcar={currentcar}/>
        <Footer />
      </div>
    );
  };


  
export default Cars
