import React from "react";
import './SearchEngine.css';
import searchBox from './Rectangle 3.png';
import { Radio,RadioGroup,FormControlLabel,FormControl } from "@material-ui/core";
import CityFilter from "./CityFilter";
import PetNumberFilter from "./PetNumberFilter";
import PetSizeFilter from "./PetSizeFilter";
import PetTypeFilter from "./PetTypeFilter";
import DatePickerFilter from "./DatePickerFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import MoreFiltersFilter from "./MoreFiltersFilter";

const SearchEngine = ({}) => {
    return (
        <div>
            <div>
                <h1 className="title">Bookmypet</h1>
                <img src={searchBox} alt="search rectangle block" className="searchBox"/>
                <FormControl className="radio_buttons" component="fieldset">
                    <RadioGroup row aria-label="options" name="row-radio-buttons-group"  >
                        <FormControlLabel  sx={{color: "#08138C"}} value="boarding" control={<Radio  sx={{color: "#08138C"}}/>} label="Boarding"/>
                        <FormControlLabel sx={{color: "#08138C"}} value="grooming" control={<Radio  sx={{color: "#08138C"}}/>} label="Grooming" />
                        <FormControlLabel  sx={{color: "#08138C"}} value="day care" control={<Radio  sx={{color: "#08138C"}}/>} label="Day Care" />
                        <FormControlLabel  sx={{color: "#08138C"}} value="vet" control={<Radio  sx={{color: "#08138C"}}/>} label="Vet"/>
                    </RadioGroup>
                </FormControl>
            </div>

            <CityFilter/>
            <PetNumberFilter/>
            <PetSizeFilter/>
            <PetTypeFilter/>
            <DatePickerFilter/>
            <PriceRangeFilter/>
            <MoreFiltersFilter/>
        </div>
        
     

    );
}

export default SearchEngine;