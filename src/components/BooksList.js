import React from "react";
import BookCard from "./BookCard";
import LoadButton from "./LoadButton";
import Loader from "./Loader";
import { useSelector } from "react-redux";

function BooksList({ bookCards, bookCount, onLoadClick, residualBookCount, loadButtonText }) {
    const isLoading = useSelector(state => state.books.isLoading);

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
                        <BookCard item={item} key={`${item.id}${index}`} />
                    )
                    }
                )}
            </ul>
            {bookCards && residualBookCount > 0 ? <LoadButton onLoadClick={onLoadClick} residualBookCount={residualBookCount} loadButtonText={loadButtonText} /> : null}
        </section>
    );
  }
  
  export default BooksList;