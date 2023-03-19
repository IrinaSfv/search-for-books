import React from "react";
import BooksList from "./BooksList";
import BookPage from "./BookPage";

function Main({ bookCards, bookCount, isLoading }) {
    return (
        <main className="content page__content">
            {/* <BooksList bookCards={bookCards} bookCount={bookCount} isLoading={isLoading} /> */}
            <BookPage />
        </main>
    );
  }
  
  export default Main;