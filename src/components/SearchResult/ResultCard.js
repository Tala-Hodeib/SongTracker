import React from "react";
import { Button, Typography } from "@mui/material";
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/core/SwitchUnstyled';
import { styled } from '@mui/system';
import { FormControlLabel } from "@mui/material";

//Props for Mui unstyled switch key:
const Root = styled('span')(`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #B3C3D3;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #FFF;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255,255,255,1);
    box-shadow: 0 0 1px 8px rgba(0,0,0,0.25);
  }

  &.${switchUnstyledClasses.checked} { 
    .${switchUnstyledClasses.thumb} {
      left: 14px;
      top: 3px;
      background-color: #FFF;
    }

    .${switchUnstyledClasses.track} {
      background: #007FFF;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }`);
  //Props end

const ResultCard = () => {
    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

    return(
        <div>
           
         <div 
            style={{marginLeft: 65,marginTop: -160,
                display: "flex",justifyContent: "flex-start",
                 width: 730, height: 180, borderRadius:"20px",
                 backgroundColor: "#3C096C", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}} >
        </div>
       

            <div style={{display:"flex",marginLeft: 85,marginTop: -230}}>
                <Typography style={{color: "#FF6D00", fontWeight: 500, fontSize: 24}}>
                 Results :
                 </Typography>
            </div>


            <div style={{marginLeft: 1080, marginTop: -10}}>
                <FormControlLabel
                    style={{color:"#FF6D00",fontWeight:"normal"}}
                    control={<SwitchUnstyled component={Root} {...label}/>}
                     label="Show track"
                     labelPlacement="start"
                         />
            </div>
        </div>

    );
}
export default ResultCard;