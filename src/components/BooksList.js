import React from "react";
import BookCard from "./BookCard";
import LoadButton from "./LoadButton";
import Loader from "./Loader";

function BooksList({ bookCards, bookCount, isLoading, onBookCardClick }) {
    return (
        <section className="books" aria-label="Books">
            {isLoading ? <Loader /> : (
                <h2 className="books__counter">
                    {bookCards ? `Found ${bookCount} results` : `Sorry, we didn't find anything`}
                </h2>
            )}
            <ul className="books__list">
                {bookCards && bookCards.map((item, index) => {
                    return (
                        <BookCard item={item} key={`${item.id}${index}`} onBookCardClick={onBookCardClick} />
                    )
                    }
                )}
            </ul>
            {bookCards && bookCount > 30 ? <LoadButton /> : null}
        </section>
    );
  }
  
  export default BooksList;