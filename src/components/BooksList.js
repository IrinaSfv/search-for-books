import React from "react";
import BookCard from "./BookCard";
import LoadButton from "./LoadButton";
import Loader from "./Loader";
import { useSelector } from "react-redux";

function BooksList({ onLoadClick }) {
    const bookCards = useSelector(state => state.books.bookCards);
    const bookQuantity = useSelector(state => state.books.bookQuantity);
    const residualBookQuantity = useSelector(state => state.books.paginationOptions.residualBookQuantity);
    const isLoading = useSelector(state => state.books.isLoading);
    console.log(residualBookQuantity)

    return (
        <section className="books" aria-label="Books">
            {isLoading ? <Loader /> : (
                <h2 className="books__counter">
                    {bookCards ? `Found ${bookQuantity} results` : `Sorry, we didn't find anything`}
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
            {bookCards && residualBookQuantity > 0 ? <LoadButton onLoadClick={onLoadClick} /> : null}
        </section>
    );
  }
  
  export default BooksList;