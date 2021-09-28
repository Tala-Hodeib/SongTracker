import React from "react";
import TodayIcon from '@mui/icons-material/Today';
import { TextField, Box, InputAdornment } from '@material-ui/core';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';


const DatePickerFilter = ({}) => {

  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
     sx={{height: 55, width: 265}}
      startText="Date From"
      endText="Date To"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(startProps, endProps) => (
        <React.Fragment >
          <TextField     
          {...startProps} 
          InputProps={{
            endAdornment: (
          <InputAdornment position="end">
          <TodayIcon sx={{color:"#08138C"}}/>
          </InputAdornment>
        )}}
          />
          
          <Box sx={{ mx: 3.5}}>  </Box>
          <TextField {...endProps} 
           InputProps={{
            endAdornment: (
          <InputAdornment position="end">
          <TodayIcon sx={{color:"#08138C"}}/>
          </InputAdornment>
        )}}/>
        </React.Fragment>
      )}
    />
      
      
    </LocalizationProvider>
 
  );

}
export default DatePickerFilter;