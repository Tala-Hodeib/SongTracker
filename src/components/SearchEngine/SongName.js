import * as React from 'react';
import { Box, InputAdornment,FormControl } from "@material-ui/core";
import {MusicNoteTwoTone} from "@material-ui/icons";
import { TextField } from '@mui/material';



 const SongName = () => {

  return (
       <div>
          <TextField
          variant="outlined"
            style={{height: 55, width: 265, backgroundColor:"white", fontFamily:'Dosis'}}
            label="Song Name"
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