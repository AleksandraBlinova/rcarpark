import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


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


const Color = () => {
    const classes = useStyles();
    const [color, setcolor] = React.useState('');
  
    const handleChange = (event) => {
        setcolor(event.target.value);
    };
    return (
        <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Цвет </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          onChange={handleChange}
        >
          <MenuItem value={1}>Color1</MenuItem>
          <MenuItem value={2}>Color2</MenuItem>
          <MenuItem value={3}>Color3</MenuItem>
          <MenuItem value={4}>Color4</MenuItem>
          
        </Select>
      </FormControl>
      </div>
    )
}

export default Color
