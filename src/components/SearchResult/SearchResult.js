import React from "react";
import CardMap from "./CardMap";
import ResultCard from "./ResultCard";


const SearchResult = () => {
    return ( 

        <div style={{display:"flex", flexDirection: "column"}}>
            <CardMap/>
            <ResultCard/>
        </div>
    );
}
export default SearchResult;