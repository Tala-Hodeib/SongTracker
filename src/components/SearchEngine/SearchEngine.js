import React from "react";
import { Radio,RadioGroup,FormControlLabel} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import Logo from './background logo.png';
import SongName from "./SongName";
import SongCountry from "./SongCountry";
import SongYear from "./SongYear";
import SearchResult from "../SearchResult/SearchResult";
import { useState } from "react";

const SearchEngine = ({handleClick}) => {

  
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div>
            <img src= {Logo} alt="Website Logo"  height="300" style={{display: "flex", justifyContent:"center", position: "absolute", top: "5px"}}/>
            </div>
                <Card style={{ left: 8,top: 300, position: "absolute", width: 1350, height: 150, backgroundColor: "#3C096C"}}>
                    <CardContent style={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-between", gap: "10px"}} >
                        <SongName />
                        <SongYear/>
                        <SongCountry/>
                    </CardContent>
                        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                            <Button onClick={handleClick}
                                style={{height: 45, width: 550, borderRadius: 50}} sx={{ '&:hover': {backgroundColor: "#9D4EDD",}, textTransform: "none",color: "white",backgroundColor:"#9D4EDD"}} startIcon={<SearchIcon sx={{color:"white"}}/>} variant="contained">Search</Button>
                                
                        </div>

                </Card>
                
        </div>
        
     

    );
}

export default SearchEngine;