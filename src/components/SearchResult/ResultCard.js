import React from "react";
import Photo from './Photo.png';
import Info from './Info.png';
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
                 backgroundColor: "white", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}} >
         <img src={Photo} alt="Hotel of pets"/>
         <img src={Info} alt="Information"
            style={{height: "170px", paddingTop: 16, paddingLeft: 15}}/>
        </div>
        <div style={{ marginTop: -50, paddingLeft:50 }}>
            <Button style={{height: 35, width: 135, borderRadius: 25}} 
                sx={{ '&:hover': {backgroundColor: "#08138C",}, 
                textTransform: "none",color: "white",backgroundColor:"#08138C"}} 
                 variant="contained">
            See availability
            </Button>
        </div>

            <div style={{display:"flex",marginLeft: 85,marginTop: -230}}>
                <Typography style={{color: "#08138C", fontWeight: 500, fontSize: 24}}>
                 1 Search Results 
                 </Typography>
            </div>

            <div style={{display:"flex",marginLeft: 550,marginTop: -28,}}>
                <Typography style={{color: "#08138C", fontSize: 16, fontWeight: 350}}>
                 Sort By:Top Reviewed ˅ 
                 </Typography>
            </div>

            <div style={{marginLeft: 1080, marginTop: -10}}>
                <FormControlLabel
                    style={{color:"#08138C",fontWeight:"normal"}}
                    control={<SwitchUnstyled component={Root} {...label}/>}
                     label="Show map"
                     labelPlacement="start"
                         />
            </div>
        </div>

    );
}
export default ResultCard;