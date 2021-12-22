import React from "react";
import { TextField } from "@material-ui/core";
import { alpha, styled } from '@mui/material/styles';
import { inputLabelClasses } from "@mui/material/InputLabel";


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
  

const SongYear = () => {
    return (
        <div>
                   <RedditTextField
              InputLabelProps={{
                sx: {
                  color: "grey", [`&.${inputLabelClasses.shrink}`]: { color:  "#240046"
                  }},
                }}
          label="Song year"
          id="reddit-input"
          variant="filled"
          type="number"
          style={{ width: 200, marginTop: 11 , backgroundColor:"white", borderRadius: 4}}
        />

        </div>

        

    );
}

export default SongYear;
