import React from "react";

function Searcher() {
    return (
        <div className="header__search">
            <input className="header__input" type="text" name="search" placeholder="Search for book..." id="search-input" minLength="2" maxLength="40" />
            <button className="header__search-button" type="submit"></button>
        </div>
    );
  }
  
  export default Searcher;