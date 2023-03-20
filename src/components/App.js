import React from "react";
import { useState, useEffect } from "react";
import api from "../api/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setBook, setSearch } from "../redux/slices/booksSlice";
// const dispatch = useDispatch();
// const selectedBook = useSelector(state => state.books.selectedBook);

function App() {
  //BookCards
  const [bookCards, setBookCards] = useState([]);
  const [bookCount, setBookCount] = useState(0);
  const [residualBookCount, setResidualBookCount] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();
  const query = useSelector(state => state.books.searchQuery);
  console.log(query);
  console.log(dispatch(setSearch('js')));
  console.log(query);

  //SearchQueries
  const [searchQuery, setSearchQuery] = useState('javascript');
  const [sortValue, setSortValue] = useState('relevance');
  const [categoryValue, setCategoryValue] = useState('');
  
  //Pagination
  const [startIndexCard, setStartIndexCard] = useState(0);
  const [shownCardsNumber, setShownCardsNumber] = useState(30);

  //Loading
  const [isLoading, setIsLoading] = useState(false);
  const [loadButtonText, setLoadButtonText] = useState('Load more');

  useEffect(() => {
    findBooks(); 
  }, [searchQuery, sortValue, categoryValue]);

  function handleSearchClick(newQuery) {
    setSearchQuery(newQuery);
  }

  function handleCategoryClick(newCategory) {
    setCategoryValue(newCategory);
  }

  function handleSortClick(newOrder) {
    setSortValue(newOrder);
  }

  function findBooks() { 
    setIsLoading(true);
    api.getBooks(searchQuery, sortValue, categoryValue, startIndexCard)
    .then((res) => {
      console.log(res);
      setBookCards(res.items);
      setBookCount(res.totalItems);
      setResidualBookCount(res.totalItems - res.items.length);
    })
    .catch((err) => {
      console.log(`${err}: couldn't find books`);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  function handleBookCardClick(bookItem) {
    setSelectedCard(bookItem);
  }

  function loadNewBooks() {
    setLoadButtonText('Loading...');
    api.getBooks(searchQuery, sortValue, categoryValue, startIndexCard)
    .then((res) => {
      console.log(res);
      setBookCards((prevValue) => prevValue.concat(res.items));
    })
    .catch((err) => {
      console.log(`${err}: couldn't load new books`);
    })
    .finally(() => {
      setLoadButtonText('Load more');
    });
  }

  function hangleLoadClick() {
    setStartIndexCard((prevValue) => prevValue + shownCardsNumber);
    setResidualBookCount((prevValue) => prevValue - shownCardsNumber);
    loadNewBooks(); 
  }

  return (
    <>
      <Header 
        onChangeSearchQuery={handleSearchClick}
        onChangeSortValue={handleSortClick}
        onChangeCategoryValue={handleCategoryClick}
        searchQuery={searchQuery} 
        sortValue={sortValue} 
        categoryValue={categoryValue}
        />
      <Main 
        bookCards={bookCards} 
        bookCount={bookCount} 
        isLoading={isLoading}
        bookItem={selectedCard}
        onBookCardClick={handleBookCardClick}
        onLoadClick={hangleLoadClick}
        residualBookCount={residualBookCount}
        loadButtonText={loadButtonText}
        />
      <Footer />
    </>
  );
}

export default App;
