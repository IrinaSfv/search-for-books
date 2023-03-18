import React from "react";

function SortingOptions() {
    return (
        <div className="header__select-container header__sorting">
            <label className="header__label header__sorting-label" for="sorting-select">Sorting by</label>
            <select className="header__select header__sorting-select" name="sorting" id="sorting-select">
                <option className="header__option" value="relevance" selected>Relevance</option>
                <option className="header__option" value="newest">Newest</option>
            </select>
        </div>
    );
  }
  
  export default SortingOptions;