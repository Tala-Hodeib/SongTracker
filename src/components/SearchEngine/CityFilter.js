import * as React from 'react';
import { Box, InputAdornment, OutlinedInput, FormControl,InputLabel, Input } from "@material-ui/core";
import {LocationOn} from "@material-ui/icons";
import { TextField } from '@mui/material';



 const CityFilter = ({}) => {

  return (
   <Box>
       <div>
         <FormControl variant="outlined">
          <TextField
          variant="outlined"
            style={{height: 55, width: 265, backgroundColor:"white"}}
            label="City"
            InputProps={{
              endAdornment: (
                <InputAdornment >
                  <LocationOn sx={{color:"#08138C"}}/>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </div>
       
      </Box>
  );
}
export default CityFilter;