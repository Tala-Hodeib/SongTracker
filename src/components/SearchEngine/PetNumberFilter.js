import React from "react";
import { TextField } from "@material-ui/core";

const PetNumberFilter = ({}) => {
    return (
        <div>
        <TextField  style={{height: 55, width: 265}} type="number"  id="outlined-basic" label="Number of Pets" variant="outlined" />
        </div>

        

    );
}

export default PetNumberFilter;
