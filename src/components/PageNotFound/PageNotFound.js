import React from 'react';
// Navigation
import { Link } from 'react-router-dom';
// StylesAndContent
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className="not-found" aria-label="NotFound">
      <h2 className="not-found__title"> Oops.. this page doesn't exist!</h2>
      <Link className="not-found__link" to="/">
        <button className="not-found__button">Try Home Page</button>
      </Link>
    </section>
  )
}

export default PageNotFound;