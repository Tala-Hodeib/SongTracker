import * as React from 'react';
import { Box, InputAdornment,FormControl } from "@material-ui/core";
import {MusicNoteTwoTone} from "@material-ui/icons";
import { TextField } from '@mui/material';



 const SongName = () => {

  return (
   <Box>
       <div>
         <FormControl variant="outlined">
          <TextField
          variant="outlined"
            style={{height: 55, width: 265, backgroundColor:"white", borderRadius: 30}}
            label="Song Name"
            InputProps={{
              endAdornment: (
                <InputAdornment >
                  <MusicNoteTwoTone/>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </div>
       
      </Box>
  );
}
export default SongName;