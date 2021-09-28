import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const PetSizeFilter = ({}) => {
    const [size, setSize] = React.useState('');

        const handleChange = (event) => {
          setSize(event.target.value);
        };
    return (
        
          <Box>
            <FormControl variant="outlined">
              <InputLabel>Pet Size</InputLabel>
              <Select
              style={{ backgroundColor:"white", height: 55, width: 265}}
                value={size}
                label="Pet Size"
                onChange={handleChange}
              >
                <MenuItem value={1}>Small</MenuItem>
                <MenuItem value={2}>Medium</MenuItem>
                <MenuItem value={3}>Large</MenuItem>
              </Select>
            </FormControl>
          </Box>

        

    );
}

export default PetSizeFilter;