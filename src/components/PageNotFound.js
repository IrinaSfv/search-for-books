import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound () {
    return (
      <section className="not-found" aria-label="NotFound">
        <h2 className="not-found__title"> 404 - Page Not Found</h2>
        <Link className="not-found__link" to="/">
            <button className="not-found__button">Try Main Page</button>
        </Link>
      </section>
    )
  }
  
export default PageNotFound;