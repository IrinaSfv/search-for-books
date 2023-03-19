import React from "react";
import SearchForm from "./SearchForm";

function Header({ onChangeSearchQuery, onChangeSortValue, onChangeCategoryValue, onSearch, searchQuery, sortValue, categoryValue }) {
  return (
    <header className="header">
      <div className="header__container">
          <h1 className="header__title">Search For Books</h1>
          <SearchForm 
            onChangeSearchQuery={onChangeSearchQuery}
            onChangeSortValue={onChangeSortValue}
            onChangeCategoryValue={onChangeCategoryValue}
            onSearch={onSearch}
            searchQuery={searchQuery}
            sortValue={sortValue}
            categoryValue={categoryValue}
          />
      </div>
    </header>
  );
}
  
  export default Header;