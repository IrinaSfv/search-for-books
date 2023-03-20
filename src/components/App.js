import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [bookCards, setBookCards] = useState([]);
  const [bookCount, setBookCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('javascript');
  const [sortValue, setSortValue] = useState('relevance');
  const [categoryValue, setCategoryValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  const [startIndexCard, setStartIndexCard] = useState(0);
  const [residualBookCount, setResidualBookCount] = useState(0);
  const [loadButtonText, setLoadButtonText] = useState('Load more');

  useEffect(() => {
    findBooks(); 
  }, []);

  function handleSearchClick(query) {
    setSearchQuery(query);
    findBooks();
  }

  function handleCategoryClick(category) {
    setCategoryValue(category);
    findBooks();
  }

  function handleSortClick(order) {
    setSortValue(order);
    findBooks();
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
    setLoadButtonText('Loading...')
    api.getBooks(searchQuery, sortValue, categoryValue, startIndexCard)
    .then((res) => {
      console.log(res);
      setBookCards((prevValue) => prevValue.concat(res.items));
    })
    .catch((err) => {
      console.log(`${err}: couldn't load new books`);
    })
    .finally(() => {
      setLoadButtonText('Load more')
    });
  }

  function hangleLoadClick() {
    setStartIndexCard((prevValue) => prevValue + 30);
    setResidualBookCount((prevValue) => prevValue - 30);
    console.log(residualBookCount);
    loadNewBooks();
  }

  return (
    <>
      <Header 
        onChangeSearchQuery={setSearchQuery}
        onChangeSortValue={setSortValue}
        onChangeCategoryValue={setCategoryValue}
        onSearch={findBooks}
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
