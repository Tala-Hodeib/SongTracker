import React from "react";
import { TextField } from "@material-ui/core";

const SongYear = () => {
    return (
        <div>
        <TextField  style={{height: 55, width: 265,
             backgroundColor:"white", borderRadius: 30}} type="number"  id="outlined-basic" 
             label="Year released" variant="outlined" 
              />
        </div>

        

    );
}

export default SongYear;
