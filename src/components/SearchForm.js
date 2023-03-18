import React from "react";
import Searcher from "./Searcher";
import Categories from "./Categories";
import SortingOptions from "./SortingOptions";

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