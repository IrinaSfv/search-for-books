import React from "react";
import SearchForm from "../SearchForm/SearchForm";
// StylesAndContent
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Search For Books</h1>
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;