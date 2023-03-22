import React from "react";
import { useState } from "react";
//StylesAndContent
import './Searcher.css';
//ReduxStates
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from '../../redux/slices/booksSlice'

function Searcher() {
    //Current search value
    const searchQuery = useSelector(state => state.books.searchQuery);
    //Value for display on the page
    const [visibleValue, setVisibleValue] = useState(searchQuery);

    //Change states
    const dispatch = useDispatch();

    //Change search value to display on the page
    function changeVisibleSearchQuery(e) {
        setVisibleValue(e.target.value);
    }

    //Send a new request to the server with a new search query
    function handleEnterClick(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            dispatch(setSearchQuery(visibleValue));
        }
    }

    //Send a new request to the server with a new search query
    function handleSearchButtonClick(e) {
        e.preventDefault();
        dispatch(setSearchQuery(visibleValue));
    }

    return (
        <div className="header__search">
            <input className="header__input" type="text" name="search" value={visibleValue} onChange={changeVisibleSearchQuery} onKeyDown={handleEnterClick} placeholder="Search for your book..." id="search-input" minLength="2" maxLength="40" />
            <button className="header__search-button" type="submit" onClick={handleSearchButtonClick}></button>
        </div>
    );
}

export default Searcher;