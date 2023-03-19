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

  useEffect(() => {
    findBooks(searchQuery, sortValue, categoryValue)
  }, []);

  function findBooks(query, order, category) {
    setIsLoading(true);
    api.getBooks(query, order, category)
    .then((res) => {
      console.log(res);
      setBookCards(res.items);
      setBookCount(res.totalItems);
    })
    .catch((err) => {
      console.log(`${err}: couldn't load books`);
    })
    .finally(() => {
      setIsLoading(false);
    });
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
        />
      <Footer />
    </>
  );
}

export default App;
