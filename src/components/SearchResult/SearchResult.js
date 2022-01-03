import React from "react";
import ResultCard from "./ResultCard";
import TrackPlayer from "./TrackPlayer";


const SearchResult = ({isVisible}) => {
    console.log("search result isVisible", isVisible)
    if (!isVisible) return null
    return ( 

        <div style={{display:"flex", flexDirection: "column"}}>
            <ResultCard/>
            <TrackPlayer/>
        </div>
    );
}
export default SearchResult;