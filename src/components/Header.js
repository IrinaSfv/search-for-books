import React from "react";
import SearchForm from "./SearchForm";

function Header({ onChangeBookCards, onChangeBookCount }) {
  return (
    <header className="header">
      <div className="header__container">
          <h1 className="header__title">Search For Books</h1>
          <SearchForm onChangeBookCards={onChangeBookCards} onChangeBookCount={onChangeBookCount} />
      </div>
    </header>
  );
}
  
  export default Header;