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
                        <FormControlLabel className ="radio1" value="boarding" control={<Radio color="primary"/>} label="Boarding"/>
                        <FormControlLabel value="grooming" control={<Radio color="primary"/>} label="Grooming" />
                        <FormControlLabel value="day care" control={<Radio color="primary"/>} label="Day Care" />
                        <FormControlLabel value="vet" control={<Radio color="primary"/>} label="Vet"/>
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