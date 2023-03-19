import React from "react";
import BooksList from "./BooksList";

function Main({ bookCards, bookCount }) {
    return (
        <main className="content page__content">
            <BooksList bookCards={bookCards} bookCount={bookCount} />
        </main>
    );
  }
  
  export default Main;