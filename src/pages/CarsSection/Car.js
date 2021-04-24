import './Car.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../components/Table/Table'


const Car = ({ cars, setCars, removeCar }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios({
            "method": "GET",
            "url": "https://localhost:44396/api/cars/",
            "headers": {
                "content-type": "application/json",
            }
        })
            .then((response) => {
                setCars(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [setCars]);

    const deleteItem = (id ) => {
        //e.stopPropagation();
        axios.delete(`https://localhost:44396/api/cars/${id}`)
            .then((response) => {
                response.status = 204 ? removeCar(id) : null;
            })
            .catch(console.error);
    };

    const showLoading = () => (loading ? <div>Загрузка...</div> : null);

    return (
        <React.Fragment>
      
        <h1 className='h1'>Модельный ряд</h1>
       
            {showLoading()}
            
            <Table  data={cars} deleteItem={deleteItem}/>
            
          
        </React.Fragment>
    );
};

export default Car;