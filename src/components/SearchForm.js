import React from "react";
import Searcher from "./Searcher";
import Categories from "./Categories";
import SortingOptions from "./SortingOptions";

function SearchForm({ onChangeBookCards, onChangeBookCount }) {
    return (
        <form className="header__form">
            <Searcher onChangeBookCards={onChangeBookCards} onChangeBookCount={onChangeBookCount} />
            <div className="header__options">
                <Categories />
                <SortingOptions />
            </div>
        </form>
    );
  }
  
  export default SearchForm;