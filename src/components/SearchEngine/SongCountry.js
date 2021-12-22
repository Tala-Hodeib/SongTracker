import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { alpha, styled } from '@mui/material/styles';
import { inputLabelClasses } from "@mui/material/InputLabel";
import { TextField } from "@material-ui/core";

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props}/>
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    borderColor: '#9D4EDD',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),

    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: '#9D4EDD',
    },
  
  },
}));


  const countries = [
    {
      value: 'USA',
      label: 'USA',
    },
    {
      value: 'EUROPE',
      label: 'EUROPE',
    },
    {
      value: 'JAPAN',
      label: 'JAPAN',
    },
  ];

const SongCountry = () => {

  
    const [country, setCountry] = React.useState('EUR');
  
    const handleChange = (event) => {
      setCountry(event.target.value);
    };
  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <RedditTextField
           InputLabelProps={{
            sx: {
              color: "grey", [`&.${inputLabelClasses.shrink}`]: { color:  "grey"
              }},
            }}
            style={{ width: 200, marginTop: 11 , backgroundColor:"white", borderRadius: 4}}
            variant= "filled"
            id="outlined-select-country"
            select
            label="Country of origin"
            value={country}
            onChange={handleChange}
          >
             {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </RedditTextField>
        </div>
        </Box>
  
  
    


    );
}

export default SongCountry;