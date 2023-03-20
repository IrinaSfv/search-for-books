import React from "react";
import { Routes, Route } from 'react-router-dom';
import BooksList from "./BooksList";
import BookPage from "./BookPage";
import PageNotFound from "./PageNotFound";

function Main({ bookCards, bookCount, isLoading, onBookCardClick, bookItem, onLoadClick, newBookCards, residualBookCount, loadButtonText }) {
    return (
        <main className="content page__content">
            <Routes>
                <Route path="/" element={<BooksList bookCards={bookCards} bookCount={bookCount} isLoading={isLoading} onBookCardClick={onBookCardClick} onLoadClick={onLoadClick} newBookCards={newBookCards} residualBookCount={residualBookCount} loadButtonText={loadButtonText} />} />
                <Route path="/:bookId" element={bookItem ? <BookPage bookItem={bookItem} /> : <PageNotFound />} />
            </Routes>
        </main>
    );
  }
  
  export default Main;