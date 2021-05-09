import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

const Availability = ({availability, setAvail}) => {
    const classes = useStyles();
    
  
    const handleChange = (event) => {
        setAvail(event.target.value);
    };
   
    return (
        <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Доступность</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={availability}
          onChange={handleChange}
        >
          <MenuItem value={true}>доступен</MenuItem>
          <MenuItem value={false}>отсутствует</MenuItem>
          
          
        </Select>
      </FormControl>
      </div>
    )
}

export default Availability
