import React from "react";

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
            <article className="book" id={item.id}>
                <img className="book__cover" src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title} />
                <div className="book__info">
                    <p className="book__category">
                        {item.volumeInfo.categories ? item.volumeInfo.categories[0] : 'No category'}
                    </p>
                    <h3 className="book__title">{item.volumeInfo.title}</h3>
                    <p className="book__authors">
                        {item.volumeInfo.authors ? getAuthors(item.volumeInfo.authors) : 'Unknown author'}
                    </p>
                </div>
            </article>
        </li>
    );

  }
  
  export default BookCard;