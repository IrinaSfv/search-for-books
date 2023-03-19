import React from "react";
import { useState } from "react";

function SortingOptions({ onChangeSortValue, onSearch, searchQuery, sortValue, categoryValue }) {
    const [selectedValue, setSelectedValue] = useState('relevance');

    function handleChangeSelect(e) {
        setSelectedValue(e.target.value);
        onChangeSortValue(e.target.value);
        onSearch(searchQuery, e.target.value, categoryValue);
    }

    return (
        <div className="header__select-container header__sorting">
            <label className="header__label header__sorting-label" htmlFor="sorting-select">Sorting by</label>
            <select className="header__select header__sorting-select" value={selectedValue} onChange={handleChangeSelect} name="sorting" id="sorting-select">
                <option className="header__option" value="relevance">Relevance</option>
                <option className="header__option" value="newest">Newest</option>
            </select>
        </div>
    );
  }
  
  export default SortingOptions;