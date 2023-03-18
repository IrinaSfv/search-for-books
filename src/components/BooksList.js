import React from "react";
import BookCard from "./BookCard";
import LoadButton from "./LoadButton";

function BooksList({ cards }) {
    // if(loading) return <Loader />;
    return (
        <section className="books" aria-label="Books">
            <h2 className="books__counter">Found 446 results</h2>
            <ul className="books__list">
                {cards.map(item => {
                    return (
                        <BookCard card={item} key={item._id} />
                    )
                }
                )}
            </ul>
            <LoadButton />
        </section>
    );
  }
  
  export default BooksList;