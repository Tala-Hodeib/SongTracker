import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { FormControlLabel } from "@mui/material";
import Switch from '@mui/material/Switch';


const ResultCard = () => {
    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

    return(
        <div>

           
         <div 
            style={{
              display: "flex",justifyContent: "flex-end",position: "absolute", left: "90px", top: 480,width: 500, height: 170, borderRadius: 10,
                 backgroundColor: "#3C096C", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}} >
        </div>
       



           
        </div>

    );
}
export default ResultCard;