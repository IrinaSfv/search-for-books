import React from "react";

function Categories() {
    return (
        <div className="header__select-container header__categories">
            <label className="header__label header__categories-label" for="categories-select">Categories</label>
            <select className="header__select header__categories-select" name="categories" id="categories-select">
                <option className="header__option" value="all" selected>All</option>
                <option className="header__option" value="art">Art</option>
                <option className="header__option" value="biography">Biography</option>
                <option className="header__option" value="computers">Computers</option>
                <option className="header__option" value="history">History</option>
                <option className="header__option" value="medical">Medical</option>
                <option className="header__option" value="poetry">Poetry</option>
            </select>
        </div>
    );
  }
  
  export default Categories;