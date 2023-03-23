import React from "react";
import { useState } from "react";
// Navigation
import { useLocation, useNavigate } from 'react-router-dom';
// StylesAndContent
import './Searcher.css';
// ReduxStates
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from '../../redux/slices/booksSlice'

function Searcher() {
    // Current location
    const currentLocation = useLocation();
    // Current search value
    const searchQuery = useSelector(state => state.books.searchQuery);
    // Value for display on the page
    const [visibleValue, setVisibleValue] = useState(searchQuery);

    // Go through the pages
    const navigate = useNavigate();

    // Change states
    const dispatch = useDispatch();

    // Go to the main page if not
    function goHomePage() {
        if (currentLocation.pathname !== '/') {
            navigate('/');
        }
    }

    // Change search value to display on the page
    function changeVisibleSearchValue(e) {
        setVisibleValue(e.target.value);
    }

    // Send a new request to the server and go to the main page
    function changeSearchQuery() {
        goHomePage();
        dispatch(setSearchQuery(visibleValue));
    }

    function handleEnterClick(e) {
        if (visibleValue && e.key === "Enter") {
            e.preventDefault();
            changeSearchQuery();
        }
    }

    function handleSearchButtonClick(e) {
        e.preventDefault();
        changeSearchQuery();
    }

    return (
        <div className="header__search">
            <input
                className="header__input"
                type="text"
                name="search"
                value={visibleValue}
                onChange={changeVisibleSearchValue}
                onKeyDown={handleEnterClick}
                placeholder="Search for your book..."
                id="search-input"
            />
            <button
                className={!visibleValue ? "header__search-button header__search-button_disabled" : "header__search-button"}
                type="submit"
                onClick={handleSearchButtonClick}
                disabled={!visibleValue}
            ></button>
        </div>
    );
}

export default Searcher;