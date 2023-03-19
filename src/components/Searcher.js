import React from "react";

function Searcher({ onChangeSearchQuery, onSearch, searchQuery, sortValue, categoryValue }) {

    function changeSearchQuery(e) {
        onChangeSearchQuery(e.target.value);
    }

    function handleEnterClick(e) {
        if(e.key === "Enter") {
            e.preventDefault(); 
            onSearch(searchQuery, sortValue, categoryValue);
        }
    }

    function handleButtonClick(e) {
        e.preventDefault(); 
        onSearch(searchQuery, sortValue, categoryValue)
    }

    return (
        <div className="header__search">
            <input className="header__input" type="text" name="search" value={searchQuery} onChange={changeSearchQuery} onKeyDown={handleEnterClick} placeholder="Search for your book..." id="search-input" minLength="2" maxLength="40" />
            <button className="header__search-button" type="submit" onClick={handleButtonClick}></button>
        </div>
    );
  }
  
  export default Searcher;