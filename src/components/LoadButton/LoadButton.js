import React from "react";
import api from "../../api/Api";
// StylesAndContent
import './LoadButton.css';
// ReduxStates
import { useSelector, useDispatch } from "react-redux";
import { setStartIndex, setResidualBookQuantity, setBookCards, setIsLoading } from '../../redux/slices/booksSlice'

function LoadButton() {
  // State to display the load text
  const isLoading = useSelector(state => state.books.isLoading);
  // Current array with books
  const bookCards = useSelector(state => state.books.bookCards);
  // DownloadFeatures
  const startIndex = useSelector(state => state.books.paginationOptions.startIndex);
  const residualBookQuantity = useSelector(state => state.books.paginationOptions.residualBookQuantity);
  const maxResults = useSelector(state => state.books.paginationOptions.maxResults);
  // SearchQueries
  const searchQuery = useSelector(state => state.books.searchQuery);
  const sortValue = useSelector(state => state.books.sortOptionValue);
  const categoryValue = useSelector(state => state.books.categoryValue);

  // Change states
  const dispatch = useDispatch();

  // Change the beginning of loading for a new part of the books
  function hangleLoadButtonClick() {
    dispatch(setStartIndex(startIndex + maxResults));
    dispatch(setResidualBookQuantity(residualBookQuantity - maxResults));
    loadNewBooks();
  }

  // Send a request to the server to get a new page with books
  function loadNewBooks() {
    dispatch(setIsLoading(true));
    api.getBooks(searchQuery, categoryValue, sortValue, startIndex)
      .then((res) => {
        dispatch(setBookCards(bookCards.concat(res.items)));
      })
      .catch((err) => {
        console.log(`${err}: couldn't load new books`);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }

  return (
    <div className="books__button-container">
      <h3 className="books__caption-button">{isLoading ? 'Just a second' : `Check out ${residualBookQuantity} more books`}</h3>
      <button
        onClick={hangleLoadButtonClick}
        className="books__load-button"
        type="button">
        {isLoading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
}

export default LoadButton;