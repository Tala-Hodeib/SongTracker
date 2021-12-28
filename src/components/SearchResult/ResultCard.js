import React from "react";
import { Typography } from "@mui/material";
import { Card } from "@material-ui/core";



const ResultCard = () => {
    

    return(
        <div>

         <div 
            style={{
              display: "flex", flexDirection:"row",alignItems:"center",justifyContent: "center",position: "absolute", left: "90px", top: 480,width: 500, height: 170, borderRadius: 10,
                 backgroundColor: "#3C096C", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}} >


            <Typography   style={{ width:480,borderRadius: 10,border:"1px solid",borderColor:"#FF8500",padding:"20px",color: "white", position: "absolute",}}>
            Sentimental is the second single extracted from the album "Bloco do Eu Sozinho" band Los Hermanos. It is the second song signed by the singer Rodrigo Amarante to consider working range. The first was "Quem Sabe", the debut album "Los Hermanos", 1999.
            </Typography>
        </div>
       



           
        </div>

    );

}
export default ResultCard;