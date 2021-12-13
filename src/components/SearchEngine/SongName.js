import * as React from 'react';
import { Box, InputAdornment,FormControl } from "@material-ui/core";
import {MusicNoteTwoTone} from "@material-ui/icons";
import { alpha, styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
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
          {/* <TextField
          variant="outlined"
            style={{height: 55, width: 265, backgroundColor:"white", fontFamily:'Dosis'}}
            label="Song lyrics"
            
          /> */}
           <RedditTextField
        label="Song lyrics"
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 , backgroundColor:"white"}}
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