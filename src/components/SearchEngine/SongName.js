import * as React from 'react';
import { Box, InputAdornment,FormControl } from "@material-ui/core";
import {MusicNoteTwoTone} from "@material-ui/icons";
import { alpha, styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
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

 const SongName = () => {

  return (
       <div>
           <RedditTextField
            InputLabelProps={{
              sx: {
                color: "grey", [`&.${inputLabelClasses.shrink}`]: { color:  "#240046"
                }},
              }}
        label="Song lyrics"
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 , backgroundColor:"white", borderRadius: 4}}
        InputProps={{
          endAdornment: (
            <InputAdornment >
              <MusicNoteTwoTone/>
            </InputAdornment>
          ),
        }}
      />
      </div>
      
      );
}
export default SongName;