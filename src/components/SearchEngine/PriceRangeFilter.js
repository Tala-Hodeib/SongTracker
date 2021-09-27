import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

  
const PriceRangeFilter = () => {
  
  const [value, setValue] =  React.useState([0,500]);
  
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
  return (
    <div style={{
      display: 'block',
      width: 'fit-content'
    }}>
        <div style={{display: "flex"}}>
      <Typography style={{paddingRight: 40}} gutterBottom>
        Price Range:
     </Typography>
     <Typography style={{paddingLeft: 40}}>
     {value[0]}$ - {value[1]}$     
     </Typography>
     </div>
      <Slider
        sx={{color: "#08138C"}}
        min={0}
        max={500}
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
  
export default PriceRangeFilter;