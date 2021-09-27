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
import { TextField, Typography } from '@mui/material';

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
        sx={{ borderRadius: 25 , borderColor: "#08138C", color: "#08138C", textTransform: "none"}}
        variant="outlined"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        More Filters
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignContent: "space-around",
                columnGap: 0.5,
                rowGap: 0.5,
                width: 550,
                height: 170,
                borderRadius: 20,
          }
        }}
      >

        <Typography style={{paddingLeft: 30}}> Popular Filters</Typography>
        <FormControlLabel
          value="start"
          control={<Checkbox  sx={{color: "#08138C"}}/>}
          label={
            <React.Fragment>
                <img src={FreeCancellation}  width="25px" height="25px" style={{ marginRight: "5px" }} />
                Free Cancellation
                </React.Fragment>
        }
          labelPlacement="start"
        />
        <FormControlLabel
            // style={{paddingBlock: 5, paddingRight: 55}}
          value="start"
          control={<Checkbox  sx={{color: "#08138C"}}/>}
          label={
            <React.Fragment>
                <img src={LateCheckout}  width="25px" height="25px" style={{ marginRight: "5px" }} />
               Late Check Out
                </React.Fragment>   
                 }       
            labelPlacement="start"
        />
        <FormControlLabel
            // style={{paddingLeft: 45}}
          value="start"
          control={<Checkbox  sx={{color: "#08138C"}}/>}
          label={
            <React.Fragment>
                <img src={Promotions}  width="25px" height="25px" style={{ marginRight: "5px" }} />
                Promotions
                </React.Fragment>   
                 } 
          labelPlacement="start"
        />
        <FormControlLabel
            // style={{paddingBlock: 5, paddingRight: 55}}
          value="start"
          control={<Checkbox  sx={{color: "#08138C"}}/>}
          label={
            <React.Fragment>
                <img src={SwimmingPool}  width="25px" height="25px" style={{ marginRight: "5px" }} />
                Swimming Pool
                </React.Fragment>   
                 } 
          labelPlacement="start"
        />
      <Button style={{paddingLeft: 50}} sx={{textTransform: "none",color: "red"}} startIcon={<ClearIcon sx={{color:"red"}}/>} variant="text">Clear All</Button>
      <Button
        sx={{
            '&:hover': {
                backgroundColor: "#08138C",
            },
            height: 27,width: 77, textTransform:"none", borderRadius: 25 , color: "white", backgroundColor: "#08138C"}}
        variant="contained">
        Apply
      </Button>
      </Menu>

    </div>

  );
}
export default MoreFiltersFilter;