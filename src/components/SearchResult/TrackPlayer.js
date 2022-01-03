import React from "react";
import { Button, Typography } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
    CardMedia
 } from '@material-ui/core';
 import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Photo from './Song.jpg';


const TrackPlayer = () => {
    const theme = useTheme();


    return(
        <div>
           
         <div 
            style={{
                display: "flex",justifyContent: "flex-end",position: "absolute", right: 190, top: 490,
                 width: 420, height: 150, border:" 3px solid",borderColor:"#9D4EDD",borderRadius: 10,
                 backgroundColor: "#ff6d00", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}} >
        <Card sx={{ backgroundColor: "#ff6d00", display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        </CardContent>
        <Typography sx={{color:'white'}} component="div" variant="h5">
            Sentimental
          </Typography>
          <Typography sx={{color:'black'}} variant="subtitle1" color="text.secondary" component="div">
            Los Hermanos
          </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton sx={{color: "white"}} aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton sx={{color: "black"}}  aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton sx={{color: "white"}}  aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 350, height: 180 }}
        src={Photo} 
       alt="Los Hermanos Sentimental song"
      />
    </Card>
        </div>
        


        </div>

    );
}
export default TrackPlayer;