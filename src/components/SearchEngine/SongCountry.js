import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const SongCountry = () => {
    const [type, setType] = React.useState('');

        const handleChange = (event) => {
          setType(event.target.value);
        };
    return (
        
          <Box sx={{ minWidth: 120 }}>
            <FormControl variant="outlined">
              <InputLabel >Country of origin</InputLabel>
              <Select
              style={{ backgroundColor:"white", height: 55, width: 265}}
                value={type}
                label="Country of origin"
                onChange={handleChange}
              >
                <MenuItem value={1}>USA</MenuItem>
                <MenuItem value={2}>Japan</MenuItem>
                <MenuItem value={3}>UK</MenuItem>
              </Select>
            </FormControl>
          </Box>

        

    );
}

export default SongCountry;