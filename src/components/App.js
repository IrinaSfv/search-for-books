import React from "react";
import { useState } from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [cards, setCards] = useState([
    {
      _id: 1,
      link: "https://libribook.com/Images/la-bibliothque-noire-pdf.jpg",
      category: "Computers",
      name: "History of Node.js, History of Node.js, History of Node.js, History of Node.js, History of Node.js, History of Node.js, History of Node.js",
      authors: "Marina Tsvetaeva"
    },
    {
      _id: 2,
      link: "https://libribook.com/Images/la-bibliothque-noire-pdf.jpg",
      category: "Computers",
      name: "History of Node.js",
      authors: "Marina Tsvetaeva"
    },
    {
      _id: 3,
      link: "https://libribook.com/Images/la-bibliothque-noire-pdf.jpg",
      category: "Computers",
      name: "History of Node.js, History of Node.js, History of Node.js",
      authors: "Marina Tsvetaeva, Marina Tsvetaeva, Marina Tsvetaeva, Marina Tsvetaeva, Marina Tsvetaeva, Marina Tsvetaeva"
    },
    {
      _id: 4,
      link: "https://libribook.com/Images/la-bibliothque-noire-pdf.jpg",
      category: "Computers",
      name: "History of Node.js",
      authors: "Marina Tsvetaeva"
    },
    {
      _id: 5,
      link: "https://libribook.com/Images/la-bibliothque-noire-pdf.jpg",
      category: "Computers",
      name: "History of Node.js",
      authors: "Marina Tsvetaeva"
    }
  ]);
  
  return (
    <>
      <Header />
      <Main cards={cards} />
      <Footer />
    </>
  );
}

export default App;
