import React from 'react'
import './Table.css'
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';


function Table (props) {
    
    return (
       
        <div className='container'>
        



        <MDBTable  >
        <MDBTableHead>
                <tr >
                    <th >
                        № Автомобиля
                    </th>
                    <th>
                        Фото
                    </th>
                    <th >
                        Модель
                    </th>
                     <th >
                        Цвет
                    </th>
                    <th >
                        Цена
                    </th>
                    <th >
                        Год выпуска
                    </th>
                    <th>
                    
                   </th>
                   <th>
                    
                   </th>
                </tr>

         </MDBTableHead>
         <MDBTableBody>
        {  props.data.filter(i =>
            i.price.toString().indexOf(props.search) !== -1 || 
            i.modelFkNavigation.model1.toLocaleLowerCase().indexOf(props.search) !== -1 ||
            i.colorFkNavigation.color1.toLocaleLowerCase().indexOf(props.search) !== -1 )
            .map(item =>(
            <tr key={item.id} >
                <td >{item.id}</td>
                <td ><img src={item.imageUrl} /></td>
                <td >{item.modelFkNavigation.model1}</td>
                <td >{item.colorFkNavigation.color1}</td>
                <td >{item.price}</td>
                <td >{item.releaseYear}</td>
                <td>  <button onClick={(e) => props.deleteItem(item.id)} className='btn btn-danger'>Удалить</button></td>
                <td>  <button onClick={(e) => props.editCar(item)} className='btn btn-dark mr-3'>Изменить</button></td>
              
            </tr>
        ))}
                
         </MDBTableBody>

    </MDBTable>
        </div>
    )
}

export default Table
