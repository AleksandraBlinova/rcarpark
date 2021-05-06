import './Car.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../components/Table/Table'
import { TableSearch } from '../../components/Table/TableSearch';
import PropTypes from 'prop-types';




const Car = ({ cars, setCars, removeCar, editCar, currentcar, setcurrentCar }) => {
    
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('')
    console.log("editcat", editCar)
    useEffect(() => {
        setLoading(true);
        axios({
            "method": "GET",
            "url": "http://localhost:58475/api/cars/",
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
    }, []);
    
     
    const deleteItem = (id ) => {
        //e.stopPropagation();
        axios.delete(`http://localhost:58475/api/cars/${id}`)
            .then((response) => {
                response.status = 204 && removeCar(id) 
            })
            .catch(console.error);
    };

  
    const showLoading = () => (loading ? <div>Загрузка...</div> : null);
      
    return (
        <React.Fragment>
      
        <h1 className='h1'>Модельный ряд</h1>
       
            {showLoading()}
         
            <TableSearch
                search={search}
                handleChangeSearch={(value) => setSearch(value)}
            />
            
            <Table search={search} data={cars} deleteItem={deleteItem} editCar={editCar} currentcar={currentcar}
            setcurrentCar={setcurrentCar}/>
            
          
        </React.Fragment>
    );
};


Car.propTypes = {
    cars: PropTypes.array.isRequired,
    setCars: PropTypes.func.isRequired,
    removeCar: PropTypes.func.isRequired,
    editCar: PropTypes.func.isRequired,
};
export default Car;