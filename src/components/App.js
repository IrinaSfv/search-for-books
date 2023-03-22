import React from "react";
import { useEffect } from "react";
import api from "../api/Api";

//Routes
import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

//ReduxStates
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading, setBookCards, setBookQuantity, setResidualBookQuantity } from '../redux/slices/booksSlice'

function App() {
  //BookToDisplay
  const selectedBook = useSelector(state => state.books.selectedBook);

  //SearchQueries
  const searchQuery = useSelector(state => state.books.searchQuery);
  const sortValue = useSelector(state => state.books.sortOptionValue);
  const categoryValue = useSelector(state => state.books.categoryValue);

  //Pagination
  const startIndex = useSelector(state => state.books.paginationOptions.startIndex);

  //Change states
  const dispatch = useDispatch();

  //Run initial and next bookList updates on the page
  useEffect(() => {
    findBooks();
  }, [searchQuery, sortValue, categoryValue]);

  //Send requests to the server
  function findBooks() {
    dispatch(setIsLoading(true));
    api.getBooks(searchQuery, categoryValue, sortValue, startIndex)
      .then((res) => {
        console.log(res);
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

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:bookId" element={selectedBook ? <DetailPage /> : <NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
