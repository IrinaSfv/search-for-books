import React from "react";
import api from "../api/Api";
import { useSelector, useDispatch } from "react-redux";
import { setStartIndex, setResidualBookQuantity, setBookCards, setIsLoading } from '../redux/slices/booksSlice'

function LoadButton() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.books.isLoading);
  const bookCards = useSelector(state => state.books.bookCards);
  const startIndex = useSelector(state => state.books.paginationOptions.startIndex);
  const residualBookQuantity = useSelector(state => state.books.paginationOptions.residualBookQuantity);
  const maxResults = useSelector(state => state.books.paginationOptions.maxResults);
  const searchQuery = useSelector(state => state.books.searchQuery);
  const sortValue = useSelector(state => state.books.sortOptionValue);
  const categoryValue = useSelector(state => state.books.categoryValue);

  function hangleButtonClick() {
    dispatch(setStartIndex(startIndex + maxResults));
    dispatch(setResidualBookQuantity(residualBookQuantity - maxResults));
    loadNewBooks();
  }

  function loadNewBooks() {
    dispatch(setIsLoading(true));
    api.getBooks(searchQuery, categoryValue, sortValue, startIndex)
      .then((res) => {
        console.log(res);
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
      <button onClick={hangleButtonClick} className="books__load-button" type="button">{isLoading ? 'Loading...' : 'Load more'}</button>
    </div>
  );
}

export default LoadButton;