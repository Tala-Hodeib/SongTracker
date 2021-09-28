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
    <div>
        <div style={{display: "flex", flexDirection: "row", marginLeft: -120}}>
      <Typography  gutterBottom>
        Price Range:
     </Typography>
     </div>
     <div style={{marginRight: -80, marginTop: -20}}>
     <Typography >
     {value[0]}$ - {value[1]}$     
     </Typography>
     </div>
      <Slider
        style={{marginLeft: -120, width: 290}}
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