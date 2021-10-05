import React from "react";
import ResultCard from "./ResultCard";
import TrackPlayer from "./TrackPlayer";


const SearchResult = () => {
    return ( 

        <div style={{display:"flex", flexDirection: "column"}}>
            <ResultCard/>
            <TrackPlayer/>
        </div>
    );
}
export default SearchResult;