import React from "react";
import emptyCoverSrc from "../images/book__empty-cover.png";

function BookCard({ item }) {

    // function handleClick() {
    //     onCardClick(card);
    // }

    function getAuthors(authorsArr) {
        if(authorsArr.length > 1) {
            return authorsArr.join(', ');
        } else {
            return authorsArr[0];
        }
    }

    return (
        <li className="books__card">
            <article className="card" id={item.id}>
                <img 
                    className="card__cover" 
                    src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : emptyCoverSrc} 
                    alt="Book cover"
                />
                <div className="card__info">
                    <p className="card__category">
                        {item.volumeInfo.categories ? item.volumeInfo.categories[0] : 'No category'}
                    </p>
                    <h3 className="card__title">{item.volumeInfo.title && item.volumeInfo.title}</h3>
                    <p className="card__authors">
                        {item.volumeInfo.authors ? getAuthors(item.volumeInfo.authors) : 'Unknown author'}
                    </p>
                </div>
            </article>
        </li>
    );

  }
  
  export default BookCard;