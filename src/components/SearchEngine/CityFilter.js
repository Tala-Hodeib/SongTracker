import * as React from 'react';
import { Box, InputAdornment, OutlinedInput, FormControl,InputLabel, Input } from "@material-ui/core";
import {LocationOn} from "@material-ui/icons";



 const CityFilter = ({}) => {

  return (
   <Box>
       <div>
         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
         <InputLabel >City</InputLabel>
          <OutlinedInput
            style={{height: 55, width: 265}}
            id="outlined-adornment"
            startAdornment={
              <InputAdornment position="start">
                <LocationOn color="primary"/>
              </InputAdornment>
            }
            label="City"
          />
        </FormControl>
      </div>
       
      </Box>
  );
}
export default CityFilter;