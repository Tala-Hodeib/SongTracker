import React from "react";
import './SearchEngine.css';
import searchBox from './Rectangle 3.png';

const SearchEngine = ({}) => {
    return (
        <div className="main">
         <h1 className="title">Bookmypet</h1>
         <img src={searchBox} alt="search rectangle block" />
        </div>

    );
}

export default SearchEngine;