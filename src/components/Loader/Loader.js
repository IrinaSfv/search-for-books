import React from "react";
// StylesAndContent
import loader from "../../images/books__loader.svg"
import './Loader.css';

function Loader() {
  return (
    <div className="books__loader-container">
      <img className="books__loader rotation" src={loader} alt="Loader" />
    </div>
  );
}

export default Loader;