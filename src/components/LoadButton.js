import React from "react";

function LoadButton({ onLoadClick, residualBookCount, loadButtonText }) {

  function hangleButtonClick() {
    onLoadClick();
  }

  return (
    <div className="books__button-container">
      <h3 className="books__title-button">Check out {residualBookCount} more books</h3>
      <button onClick={hangleButtonClick} className="books__load-button" type="button">{loadButtonText}</button>
    </div>
  );
}

export default LoadButton;