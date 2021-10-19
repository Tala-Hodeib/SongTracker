import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { FormControlLabel } from "@mui/material";
import Switch from '@mui/material/Switch';


const ResultCard = () => {
    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

    return(
        <div>

          <div >
                <Typography style={{color: "#FF6D00", fontWeight: 500, fontSize: 24}}>
                 Results :
                 </Typography>
            </div>
           
         <div 
            style={{
              display: "flex",justifyContent: "flex-end",position: "absolute", right: "90px", top: "350px",width: 500, height: 100, borderRadius:"20px",
                 backgroundColor: "#3C096C", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}} >
        </div>
       



            <div style={{marginLeft: 1080, marginTop: -10}}>
            <FormControlLabel style={{color:"#FF6D00",fontWeight:"normal"}}
              control={<Switch color="warning" />} label="Show Track" labelPlacement="start"/>
            </div>
        </div>

    );
}
export default ResultCard;