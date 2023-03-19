import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [bookCards, setBookCards] = useState([]);
  const [bookCount, setBookCount] = useState(0);
  const [searchInitQuery, setSearchInitQuery] = useState('flowers');

  useEffect(() => {
    api.getInitialBooks(searchInitQuery)
    .then((res) => {
      console.log(res);
      setBookCards(res.items);
      console.log(res.items);
      setBookCount(res.totalItems);
      console.log(res.totalItems);
    })
    .catch((err) => {
      console.log(`${err}: couldn't load books`);
    });
  }, []);

  return (
    <>
      <Header onChangeBookCards={setBookCards} onChangeBookCount={setBookCount} />
      <Main bookCards={bookCards} bookCount={bookCount} />
      <Footer />
    </>
  );
}

export default App;
