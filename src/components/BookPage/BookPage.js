import React from "react";
//StylesAndContent
import './BookPage.css';
import emptyCoverSrc from "../../images/book__empty-cover.png";
//Navigation
import { useNavigate } from "react-router-dom";
//ReduxStates
import { useSelector } from "react-redux";

function BookPage() {
  //BookToDisplay
  const bookItem = useSelector(state => state.books.selectedBook);

  //Go through the pages
  const navigate = useNavigate();

  //Take the user back one step
  function handleBackButtonClick() {
    navigate(-1);
  }

  //Set the display of the list of categories, separated by "/"
  function getCategories(categoriesArr) {
    if (categoriesArr.length > 1) {
      return categoriesArr.join(' / ');
    } else {
      return categoriesArr[0];
    }
  }

  //Set the display of the list of authors, separated by commas
  function getAuthors(authorsArr) {
    if (authorsArr.length > 1) {
      return authorsArr.join(', ');
    } else {
      return authorsArr[0];
    }
  }

  //TODO: The Google is now replacing large covers with universal covers. 
  //To make the covers visible on book pages, I made following method inactive. 
  //In the future I plan to set links to good quality covers here

  //Set the picture of the book cover to a larger size
  // function getBigCover(cover) {
  //   const bigCoverSrc = cover.replace('zoom=5', 'zoom=10')
  //   return bigCoverSrc;
  // }

  return (
    <section className="book" aria-label="BookPage">
      <div className="book__button-container">
        <button className="book__button" onClick={handleBackButtonClick}>Go back</button>
      </div>
      <div className="book__container">
        <div className="book__cover-container">
          <img className="book__cover" src={bookItem && bookItem.volumeInfo.imageLinks ? bookItem.volumeInfo.imageLinks.smallThumbnail : emptyCoverSrc} alt="Book cover" />
        </div>
        <div className="book__info">
          <p className="book__categories">
            {bookItem && bookItem.volumeInfo.categories ? getCategories(bookItem.volumeInfo.categories) : 'No category'}
          </p>
          <h2 className="book__title">{bookItem && bookItem.volumeInfo.title ? bookItem.volumeInfo.title : null}</h2>
          <p className="book__authors">
            {bookItem && bookItem.volumeInfo.authors ? getAuthors(bookItem.volumeInfo.authors) : 'Unknown author'}
          </p>
          {bookItem && bookItem.volumeInfo.description ? (
            <div className="book__description-container">
              <p className="book__description">{bookItem.volumeInfo.description}</p>
            </div>
          ) : null}
        </div>
      </div>


    </section>
  );
}

export default BookPage;