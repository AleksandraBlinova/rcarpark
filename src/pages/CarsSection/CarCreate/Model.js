import React, { useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginLeft: theme.spacing(24),
      minWidth: 220,
      marginTop: theme.spacing(2),
    },
    selectEmpty: {
      marginTop: theme.spacing(2.5),
    },
  }));

  
  
function Model ({models, setModel})  {
    
  const classes = useStyles();
    
    
  

    const handleChange = (event) => {
        setModel(event.target.value);
    };



    useEffect(() => {
     
      axios({
          "method": "GET",
          "url": "http://localhost:58475/api/models/",
          "headers": {
              "content-type": "application/json",
          }
      })
          .then((response) => {
              setModel(response.data);
              
          })
          .catch((error) => {
              console.log(error);
             
          });
  }, [setModel]);



  console.log(models)

    return (
        <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Модель</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          onChange={handleChange}
        >
       
       <MenuItem>{models}</MenuItem> 
       
          
        </Select>
      </FormControl>
      </div>
    )
}

export default Model
