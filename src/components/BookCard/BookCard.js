import React from "react";
// Navigation
import { Link } from 'react-router-dom';
// StylesAndContent
import './BookCard.css';
import emptyCoverSrc from "../../images/book__empty-cover.png";
// ReduxStates
import { useDispatch } from "react-redux";
import { setSelectedBook } from '../../redux/slices/booksSlice'

function BookCard({ item }) {
    // Change states
    const dispatch = useDispatch();

    // Set the card to display on a other page
    function handleCardClick() {
        dispatch(setSelectedBook(item));
    }

    // Set the display of the list of authors, separated by commas
    function getAuthors(authorsArr) {
        if (authorsArr.length > 1) {
            return authorsArr.join(', ');
        } else {
            return authorsArr[0];
        }
    }

    // Get the picture of the book cover in small size
    function getSmallCoverSrc(bookId) {
        // Google is now gives pictures of bad quality
        // if you take the image out of the '.volumeInfo.imageLinks.smallThumbnail'
        const smallCoverSrc = `https://books.google.com/books/publisher/content/images/frontcover/${bookId}?fife=w200-h300&source=gbs_api`
        return smallCoverSrc;
    }

    return (
        <li className="books__card">
            <Link className="books__link" to={`${item.id}`}>
                <article className="card" id={item.id} onClick={handleCardClick} >
                    <div className="card__cover-container">
                        <img
                            className="card__cover"
                            src={item.volumeInfo.imageLinks ? getSmallCoverSrc(item.id) : emptyCoverSrc}
                            alt="Book cover"
                        />
                    </div>
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
            </Link>
        </li>
    );

}

export default BookCard;