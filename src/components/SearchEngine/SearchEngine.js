import React from "react";
import './SearchEngine.css';
import { Radio,RadioGroup,FormControlLabel,FormControl } from "@material-ui/core";
import CityFilter from "./CityFilter";
import PetNumberFilter from "./PetNumberFilter";
import PetSizeFilter from "./PetSizeFilter";
import PetTypeFilter from "./PetTypeFilter";
import DatePickerFilter from "./DatePickerFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import MoreFiltersFilter from "./MoreFiltersFilter";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import { Box } from "@mui/system";

const SearchEngine = ({}) => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
                <Card style={{display:"flex", flexDirection: "row", flexWrap: "wrap",}} sx={{width: 1235, height: 305, borderRadius:"40px", backgroundColor: "#f4fafe"}}>
                    <CardContent style={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-between"}} >
                        <RadioGroup sx={{width: "100%", justifyContent: "center"}} row aria-label="options" name="row-radio-buttons-group" >
                         <FormControlLabel   sx={{color: "#08138C"}} value="boarding" control={<Radio  sx={{color: "#08138C"}}/>} label="Boarding"/>
                         <FormControlLabel sx={{color: "#08138C"}} value="grooming" control={<Radio  sx={{color: "#08138C"}}/>} label="Grooming" />
                         <FormControlLabel  sx={{color: "#08138C"}} value="day care" control={<Radio  sx={{color: "#08138C"}}/>} label="Day Care" />
                         <FormControlLabel  sx={{color: "#08138C"}} value="vet" control={<Radio  sx={{color: "#08138C"}}/>} label="Vet"/>
                        </RadioGroup>
                

                    <CityFilter />
                    <Box sx={{ mx: 0.5 }}>  </Box>
                    <PetNumberFilter/>
                    <PetTypeFilter/>
                    <PetSizeFilter/>
                    <DatePickerFilter/>
                    <PriceRangeFilter/>
                    <MoreFiltersFilter/>


                    

                    </CardContent>
                    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <Button style={{height: 45, width: 265, borderRadius: 25}} sx={{ '&:hover': {backgroundColor: "#08138C",}, textTransform: "none",color: "white",backgroundColor:"#08138C"}} startIcon={<SearchIcon sx={{color:"white"}}/>} variant="contained">Search Now</Button>
                    </div>
                </Card>
                
        </div>
        
     

    );
}

export default SearchEngine;