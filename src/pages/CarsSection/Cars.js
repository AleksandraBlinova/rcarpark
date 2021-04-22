import React, { useState } from 'react';
import './Cars.css'
import Car from './Car.js'
import CarCreate from './CarCreate'


const Cars = () => {
    const [cars, setCars] = useState([]);
    const addCar = (car) => setCars([...cars, car]);
    const removeCar = (removeId) => setCars(cars.filter(({ Id }) => Id !== removeId));
  
    return (
      <div>
      <CarCreate
      addCar={addCar}
         />
        <Car
          cars={cars}
          setCars={setCars}
          removeCar={removeCar}
        />
      </div>
    );
  };

export default Cars
