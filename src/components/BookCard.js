import React from "react";

function BookCard({ card }) {

    // function handleClick() {
    //     onCardClick(card);
    // }

    return (
        <li className="books__card">
            <article className="book" id={card._id}>
                <img className="book__cover" src={card.link} alt={card.name} />
                <div className="book__info">
                    <p className="book__category">{card.category}</p>
                    <h3 className="book__title">{card.name}</h3>
                    <p className="book__authors">{card.authors}</p>
                </div>
            </article>
        </li>
    );

  }
  
  export default BookCard;