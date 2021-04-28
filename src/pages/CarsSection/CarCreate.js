import React from 'react';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import './CarCreate.css'


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(6),
      },
    },
    input: {
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

function CarCreate ({ addCar })  {

    const handleSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target.elements.url;
        axios.post('https://localhost:44396/api/cars/', { url: value })
            .then((response) => {
                response.status = 201 ? addCar(response.data) : null;
            })
            .catch(console.error);
    };
   
    return (
      
    <React.Fragment>
     <h1 className='h1'>Добавление нового авто</h1>
    <div >
    <form className='form-container1' onSubmit={handleSubmit}>
    <div>
          
          <div className='combobox'>
            <FormControl >
            <InputLabel htmlFor="demo-customized-select-native">Модель</InputLabel>
            <NativeSelect >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          </div>
          <div className='combobox'>
          <FormControl >
          <InputLabel htmlFor="demo-customized-select-native">Цвет</InputLabel>
          <NativeSelect>
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
        </div>

        <div className='label'>
        <FormControl >
        <InputLabel htmlFor="demo-customized-textbox">Цена</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
        </FormControl>
        </div>

        <div className='label'>
        <FormControl >
        <InputLabel htmlFor="demo-customized-textbox">Год выпуска</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
        </FormControl>
        </div>

        <div className='label'>
        <FormControl >
        <InputLabel htmlFor="demo-customized-textbox">Фото</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
        </FormControl>
        </div>

        <div>
        <button className='btn btn-primary' type="submit">Создать</button>
        </div>

    </div>
    </form>
    </div>

           
    </React.Fragment >
    )
}

export default CarCreate;