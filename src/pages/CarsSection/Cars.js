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
    
    
    
    return (
      <div>
     
        <Car
          cars={cars}
          setCars={setCars}
          removeCar={removeCar}
        />
        <CarCreate
        addCar={addCar}
        cars={cars}
           />

       <CarChange />

        <Footer />
      </div>
    );
  };


  
export default Cars
