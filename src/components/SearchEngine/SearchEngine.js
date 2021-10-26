import React from "react";
import { Radio,RadioGroup,FormControlLabel} from "@material-ui/core";
import MoreFiltersFilter from "./MoreFiltersFilter";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import Logo from './background logo.png';
import Background from './background music.png';
import SongName from "./SongName";
import SongCountry from "./SongCountry";
import SongYear from "./SongYear";

const SearchEngine = () => {
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div>
            <img src= {Logo} alt="Website Logo"  height="300" style={{display: "flex", justifyContent:"center", position: "absolute", top: "5px"}}/>
            </div>
                <Card style={{display:"flex", flexDirection: "row", flexWrap: "wrap", marginTop: 280, position: "absolute", left: 5 }} sx={{width: 1000, height: 150, borderRadius:"40px", backgroundColor: "#3C096C"}}>
                    <CardContent style={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-between", gap: "10px"}} >
                        <SongName />
                        <SongYear/>
                        <SongCountry/>
                        <MoreFiltersFilter/>
                    </CardContent>
                        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                            <Button style={{height: 45, width: 265, borderRadius: 25}} sx={{ '&:hover': {backgroundColor: "#9D4EDD",}, textTransform: "none",color: "white",backgroundColor:"#9D4EDD"}} startIcon={<SearchIcon sx={{color:"white"}}/>} variant="contained">Search</Button>
                        </div>
                </Card>
                
        </div>
        
     

    );
}

export default SearchEngine;