import React from "react";
import BookCard from "../BookCard/BookCard";
import LoadButton from "../LoadButton/LoadButton";
import Loader from "../Loader/Loader";
// StylesAndContent
import './BookList.css';
// ReduxStates
import { useSelector } from "react-redux";

function BooksList() {
    // BooksFeatures
    const bookCards = useSelector(state => state.books.bookCards);
    const bookQuantity = useSelector(state => state.books.bookQuantity);
    const residualBookQuantity = useSelector(state => state.books.paginationOptions.residualBookQuantity);
    // State to display the spinner
    const isLoading = useSelector(state => state.books.isLoading);

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
            {bookCards && residualBookQuantity > 0 ? <LoadButton /> : null}
        </section>
    );
}

export default BooksList;