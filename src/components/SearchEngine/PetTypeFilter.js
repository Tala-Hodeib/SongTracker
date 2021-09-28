import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const PetTypeFilter = () => {
    const [type, setType] = React.useState('');

        const handleChange = (event) => {
          setType(event.target.value);
        };
    return (
        
          <Box sx={{ minWidth: 120 }}>
            <FormControl variant="outlined">
              <InputLabel >Pet Type</InputLabel>
              <Select
              style={{ backgroundColor:"white", height: 55, width: 265}}
                value={type}
                label="Pet Type"
                onChange={handleChange}
              >
                <MenuItem value={1}>Dog</MenuItem>
                <MenuItem value={2}>Cat</MenuItem>
                <MenuItem value={3}>Dragon</MenuItem>
              </Select>
            </FormControl>
          </Box>

        

    );
}

export default PetTypeFilter;