import React from "react";
import SearchForm from "./SearchForm";

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