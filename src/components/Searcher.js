import React from "react";
import { useState } from "react";

function Searcher({ onChangeSearchQuery, searchQuery }) {
    const [visibleValue, setVisibleValue] = useState(searchQuery);

    function changeVisibleSearchQuery(e) {
        setVisibleValue(e.target.value);
    }

    function handleEnterClick(e) {
        if(e.key === "Enter") {
            e.preventDefault(); 
            onChangeSearchQuery(visibleValue);
        }
    }

    function handleButtonClick(e) {
        e.preventDefault(); 
        onChangeSearchQuery(visibleValue);
    }

    return (
        <div className="header__search">
            <input className="header__input" type="text" name="search" value={visibleValue} onChange={changeVisibleSearchQuery} onKeyDown={handleEnterClick} placeholder="Search for your book..." id="search-input" minLength="2" maxLength="40" />
            <button className="header__search-button" type="submit" onClick={handleButtonClick}></button>
        </div>
    );
  }
  
  export default Searcher;