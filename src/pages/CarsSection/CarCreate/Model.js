import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

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


const Model = () => {
    const classes = useStyles();
    const [model, setModel] = React.useState('');
  
    const handleChange = (event) => {
        setModel(event.target.value);
    };
    return (
        <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Модель</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          onChange={handleChange}
        >
          <MenuItem value={1}>Model1</MenuItem>
          <MenuItem value={2}>Model2</MenuItem>
          <MenuItem value={3}>Model3</MenuItem>
          
        </Select>
      </FormControl>
      </div>
    )
}

export default Model
