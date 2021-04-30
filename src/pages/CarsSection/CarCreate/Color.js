import React, { useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    formControl: {
      marginLeft: theme.spacing(24),
      minWidth: 220,
      marginTop: theme.spacing(3),
    },
    selectEmpty: {
      marginTop: theme.spacing(2.5),
    },
  }));


const Color = ({colors, setColor}) => {
    
  const classes = useStyles();
   
  
    const handleChange = (event) => {
      setColor(event.target.value);
  };



  useEffect(() => {
   
    axios({
        "method": "GET",
        "url": "http://localhost:58475/api/colors/",
        "headers": {
            "content-type": "application/json",
        }
    })
        .then((response) => {
            setColor(response.data);
            
        })
        .catch((error) => {
            console.log(error);
           
        });
}, [setColor]);


    return (
        <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Цвет </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
        <MenuItem>{colors}</MenuItem> 
          
        </Select>
      </FormControl>
      </div>
    )
}

export default Color
