import React from "react";
import emptyCoverSrc from "../images/book__empty-cover.png";

function BookPage() {
  return (
    <section className="book" aria-label="BookPage">
      <div className="book__button-container">
        <button className="book__button">Go back</button>
      </div>
      <div className="book__container">
        <div className="book__cover-container">
          <img className="book__cover" src={emptyCoverSrc} alt="Book cover"/>
        </div>
        <div className="book__info">
          <p className="book__categories">Category / Lalala / Interner</p>
          <h2 className="book__title">Book title</h2>
          <p className="book__authors">Marina Tsvetaeva, Marina Tsvetaeva, Marina Tsvetaeva, Marina Tsvetaeva</p>
          <div className="book__description-container">
            <p className="book__description">description description description description description description description description description description description</p>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}

export default BookPage;