import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FreeCancellation from './Free Cancellation.png';
import LateCheckout from './Late Checkout.png';
import Promotions from './Promotions.png';
import SwimmingPool from './Swimming Pool.png';
import ClearIcon from '@mui/icons-material/Clear';
import { Typography } from '@mui/material';

 const MoreFiltersFilter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 

  return (
    <div>
      <Button
        sx={{ borderRadius: 25 , borderColor: "#08138C",
         color: "#08138C",backgroundColor:"white",textTransform: "none"}}
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        More Filters
      </Button>
      <Menu
        anchorPosition={ {left:50, top:50} }
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: {
                display: "flex",
                boxSizing: 'border-box',
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                alignContent: "space-evenly",
                columnGap: 0.25,
                rowGap: 0.25,
                width: 550,
                height: 170,
                borderRadius: 20,
          }
        }}>

        <Typography 
            style={{ marginLeft: 15,fontWeight:"bold",
                color:"#08138C", fontSize: 24 , width: '100%' }}>
             Popular Filters
        </Typography>
        <FormControlLabel
         style={{width: '50%', display: "flex", alignItems: "flex-start", marginLeft:-110}}
         value="start"
         control={<Checkbox  sx={{color: "#08138C"}}/>}
         label={
            <React.Fragment>
                <img src={FreeCancellation} alt="Cancel Icon"
                 width="25px" height="25px" 
                 style={{ marginRight: "5px", alignSelf: "center" }} />
                Free Cancellation
             </React.Fragment>}
         labelPlacement="start"
        />
        <FormControlLabel
          style={{width: '50%', marginLeft: 0,  display: "flex", alignItems: "flex-start"}}
          value="start"
          control={<Checkbox  sx={{color: "#08138C"}}/>}
          label={
            <React.Fragment>
                 <img src={Promotions} alt="Promotion Icon"
                  width="25px" height="25px"
                   style={{ marginRight: "5px" }} />
                Promotions
            </React.Fragment>}       
            labelPlacement="start"
        />
        <FormControlLabel
          style={{width: '50%' , boxSizing: 'border-box',
            display: "flex", alignItems: "flex-start",marginLeft:-90}}
          value="start"
          control={<Checkbox  sx={{color: "#08138C"}}/>}
          label={
            <React.Fragment>
                 <img src={LateCheckout} alt="Check out Icon" 
                  width="25px" height="25px"
                   style={{ marginRight: "5px" }} />
               Late Check Out
            </React.Fragment>} 
          labelPlacement="start"
        />
        <FormControlLabel
        style={{width: '50%', display: "flex", alignItems: "flex-start"}}
          value="start"
          control={<Checkbox  sx={{color: "#08138C"}}/>}
          label={
            <React.Fragment>
                <img src={SwimmingPool} alt="Swimming Pool Icon"
                 width="25px" height="25px"
                 style={{ marginRight: "5px", paddingTop: 4 }} />
                Swimming Pool
                </React.Fragment>} 
          labelPlacement="start"
        />
      <Button 
            style={{ width: '20%', marginLeft: 0, boxSizing: 'border-box'}}
             sx={{textTransform: "none",color: "red", }} 
             startIcon={<ClearIcon sx={{color:"red"}}/>} variant="text">
           Clear All
        </Button>
      <Button
            style={{width: '20%', marginLeft:0 , boxSizing: 'border-box'}}
            sx={{'&:hover': {backgroundColor: "#08138C"},
                height: 27,width: 77, textTransform:"none", borderRadius: 25 , 
                color: "white", backgroundColor: "#08138C"}}
             variant="contained">
         Apply
      </Button>
      </Menu>

    </div>

  );
}
export default MoreFiltersFilter;