import React from "react";
import { useEffect } from "react";
import api from "../../api/Api";
// Routes
import { Routes, Route } from 'react-router-dom';
import HomePage from "../../pages/HomePage";
import DetailPage from "../../pages/DetailPage";
import NotFoundPage from "../../pages/NotFoundPage";
// ReduxStates
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading, setBookCards, setBookQuantity, setResidualBookQuantity } from '../../redux/slices/booksSlice';

function App() {
  // Book to display on the othe page
  const selectedBook = useSelector(state => state.books.selectedBook);
  // Search Queries
  const searchQuery = useSelector(state => state.books.searchQuery);
  const sortValue = useSelector(state => state.books.sortOptionValue);
  const categoryValue = useSelector(state => state.books.categoryValue);
  // Pagination
  const startIndex = useSelector(state => state.books.paginationOptions.startIndex);

  // Change states
  const dispatch = useDispatch();

  // Run initial and next bookList updates on the page
  useEffect(() => {
    findBooks();
  }, [searchQuery, sortValue, categoryValue]);

  // Send requests to the server
  function findBooks() {
    dispatch(setIsLoading(true));
    api.getBooks(searchQuery, categoryValue, sortValue, startIndex)
      .then((res) => {
        //TODO: use the eliminateDuplicatesById function to set only unique BookCards
        dispatch(setBookCards(res.items));
        dispatch(setBookQuantity(res.totalItems));
        dispatch(setResidualBookQuantity(res.totalItems - res.items.length));
      })
      .catch((err) => {
        console.log(`${err}: couldn't find books`);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }

  // Takes an array of books and returns an array of unique books.
  // This is to avoid loading books with the same ID on the page 
  //function eliminateDuplicatesById(items) {
  //  const uniqueIds = [];
  //  const uniqueBookCards = items.map(item => {
  //    if (!uniqueIds.includes(item.id)) {
  //      uniqueIds.push(item.id);
  //      return item;
  //    }
  //  }
  //  )
  //    TODO: this method should redefine not only the new array of unique books,
  //    but also the new bookQuantity and residualBookQuantity
  //  return uniqueBookCards;
  //}

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:bookId" element={selectedBook ? <DetailPage /> : <NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;