import React from 'react'
import './Table.css'

function Table(props) {
    return (
        <div className='container'>
        <table >
        <thead>
                <tr>
                    <th>
                        № Автомобиля
                    </th>
                    <th>
                        Фото
                    </th>
                    <th>
                        Модель
                    </th>
                     <th>
                        Цвет
                    </th>
                    <th>
                        Цена
                    </th>
                    <th>
                        Год выпуска
                    </th>
                    <th>
                    
                   </th>
                   <th>
                    
                   </th>
                </tr>

         </thead>
         <tbody>
               
         { props.data.map(item =>(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td><img src={item.imageUrl} /></td>
                <td>{item.modelFkNavigation.model1}</td>
                <td>{item.colorFkNavigation.color1}</td>
                <td>{item.price}</td>
                <td>{item.releaseYear}</td>
                <td>  <button className='btn btn-danger'>Удалить</button></td>
                <td>  <button className='btn btn-dark mr-3'>Изменить</button></td>
            </tr>
        ))}
                
         </tbody>

    </table>
        </div>
    )
}

export default Table
