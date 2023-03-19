import React from "react";
import Searcher from "./Searcher";
import Categories from "./Categories";
import SortingOptions from "./SortingOptions";

function SearchForm({ onChangeSearchQuery, onChangeSortValue, onChangeCategoryValue, onSearch, searchQuery, sortValue, categoryValue }) {
    return (
        <form className="header__form">
            <Searcher 
                onChangeSearchQuery={onChangeSearchQuery} 
                onSearch={onSearch}
                searchQuery={searchQuery}
                sortValue={sortValue}
                categoryValue={categoryValue}
            />
            <div className="header__options">
                <Categories 
                    onChangeCategoryValue={onChangeCategoryValue}
                    onSearch={onSearch}
                    searchQuery={searchQuery}
                    sortValue={sortValue}
                    categoryValue={categoryValue}
                />
                <SortingOptions 
                    onChangeSortValue={onChangeSortValue} 
                    onSearch={onSearch}
                    searchQuery={searchQuery}
                    sortValue={sortValue}
                    categoryValue={categoryValue}
                />
            </div>
        </form>
    );
  }
  
  export default SearchForm;