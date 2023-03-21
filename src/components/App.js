import React from "react";
import { useState, useEffect } from "react";
import api from "../api/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading, setBookCards, setBookQuantity, setResidualBookQuantity } from '../redux/slices/booksSlice'

function App() {
  const dispatch = useDispatch();

  //BookCards
  const bookCards = useSelector(state => state.books.bookCards);
  const bookQuantity = useSelector(state => state.books.bookQuantity);
  const residualBookQuantity = useSelector(state => state.books.paginationOptions.residualBookQuantity);
  const selectedBook = useSelector(state => state.books.selectedBook);

  //SearchQueries
  const searchQuery = useSelector(state => state.books.searchQuery);
  const sortValue = useSelector(state => state.books.sortOptionValue);
  const categoryValue = useSelector(state => state.books.categoryValue);

  //Pagination
  const [startIndexCard, setStartIndexCard] = useState(0);
  const maxResults = useSelector(state => state.books.paginationOptions.maxResults);

  //Loading
  const isLoading = useSelector(state => state.books.isLoading);
  const [loadButtonText, setLoadButtonText] = useState('Load more');

  useEffect(() => {
    findBooks(); 
  }, [searchQuery, sortValue, categoryValue]);

  function findBooks() { 
    dispatch(setIsLoading(true));
    api.getBooks(searchQuery, sortValue, categoryValue, startIndexCard)
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

  // function loadNewBooks() {
  //   setLoadButtonText('Loading...');
  //   api.getBooks(searchQuery, sortValue, categoryValue, startIndexCard)
  //   .then((res) => {
  //     console.log(res);
  //     setBookCards((prevValue) => prevValue.concat(res.items));
  //   })
  //   .catch((err) => {
  //     console.log(`${err}: couldn't load new books`);
  //   })
  //   .finally(() => {
  //     setLoadButtonText('Load more');
  //   });
  // }

  // function hangleLoadClick() {
  //   setStartIndexCard((prevValue) => prevValue + maxResults);
  //   dispatch(setResidualBookQuantity((prevValue) => prevValue - maxResults));
  //   loadNewBooks(); 
  // }

  return (
    <>
      <Header />
      <Main 
        bookCards={bookCards} 
        bookCount={bookQuantity} 
        bookItem={selectedBook}
        onLoadClick={hangleLoadClick}
        residualBookCount={residualBookQuantity}
        loadButtonText={loadButtonText}
        />
      <Footer />
    </>
  );
}

export default App;
