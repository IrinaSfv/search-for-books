import React from "react";
import Searcher from "../Searcher/Searcher";
import Categories from "../Categories/Categories";
import SortingOptions from "../SortingOptions/SortingOptions";
//StylesAndContent
import './SearchForm.css';

function SearchForm() {
    return (
        <form className="header__form">
            <Searcher />
            <div className="header__options">
                <Categories />
                <SortingOptions />
            </div>
        </form>
    );
}

export default SearchForm;