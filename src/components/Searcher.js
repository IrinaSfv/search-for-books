import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from '../redux/slices/booksSlice'

function Searcher() {
    const searchQuery = useSelector(state => state.books.searchQuery);
    const [visibleValue, setVisibleValue] = useState(searchQuery);
    const dispatch = useDispatch();

    function changeVisibleSearchQuery(e) {
        setVisibleValue(e.target.value);
    }

    function handleEnterClick(e) {
        if(e.key === "Enter") {
            e.preventDefault(); 
            dispatch(setSearchQuery(visibleValue));
        }
    }

    function handleButtonClick(e) {
        e.preventDefault(); 
        dispatch(setSearchQuery(visibleValue));
    }

    return (
        <div className="header__search">
            <input className="header__input" type="text" name="search" value={visibleValue} onChange={changeVisibleSearchQuery} onKeyDown={handleEnterClick} placeholder="Search for your book..." id="search-input" minLength="2" maxLength="40" />
            <button className="header__search-button" type="submit" onClick={handleButtonClick}></button>
        </div>
    );
  }
  
  export default Searcher;