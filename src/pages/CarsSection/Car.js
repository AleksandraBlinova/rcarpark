import './Car.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


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

    const deleteItem = ({ Id }) => {
        //e.stopPropagation();
        axios.delete(`https://localhost:44396/api/cars/${Id}`)
            .then((response) => {
                response.status = 204 ? removeCar(Id) : null;
            })
            .catch(console.error);
    };

    const showLoading = () => (loading ? <div>Загрузка...</div> : null);

    return (
        <React.Fragment>
            <h3>Модельный ряд</h3>
            {showLoading()}
            {cars.map(({ Id, url}) => (
                <div className="Car" key={Id} id={Id} >

                    <strong > {Id}: {url} </strong>

                    <button onClick={(e) => deleteItem({Id})}>Удалить</button>

                   
                </div>
            ))}
        </React.Fragment>
    );
};

export default Car;