import React from "react";
import BooksList from "./BooksList";

function Main({ cards }) {
    return (
        <main className="content page__content">
            <BooksList cards={cards} />
        </main>
    );
  }
  
  export default Main;