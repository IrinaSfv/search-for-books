import React from "react";
import BookCard from "./BookCard";
import LoadButton from "./LoadButton";

function BooksList({ bookCards, bookCount }) {
    // if(loading) return <Loader />;
    return (
        <section className="books" aria-label="Books">
            <h2 className="books__counter">Found {bookCount} results</h2>
            <ul className="books__list">
                {bookCards.map(item => {
                    return (
                        <BookCard item={item} key={item.id} />
                    )
                }
                )}
            </ul>
            <LoadButton />
        </section>
    );
  }
  
  export default BooksList;