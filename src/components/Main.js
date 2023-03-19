import React from "react";
import { Routes, Route } from 'react-router-dom';
import BooksList from "./BooksList";
import BookPage from "./BookPage";

function Main({ bookCards, bookCount, isLoading, onBookCardClick, bookItem }) {
    return (
        <main className="content page__content">
            <Routes>
                <Route path="/" element={<BooksList bookCards={bookCards} bookCount={bookCount} isLoading={isLoading} onBookCardClick={onBookCardClick} />} />
                <Route path="/:bookId" element={<BookPage bookItem={bookItem} />} />
            </Routes>
        </main>
    );
  }
  
  export default Main;