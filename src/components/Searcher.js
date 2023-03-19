import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";

function Searcher({ onChangeBookCards, onChangeBookCount }) {
    const [searchQuery, setSearchQuery] = useState('');

    function changeSearch(e) {
        setSearchQuery(e.target.value);
    }

    function findBooks(e) {
        if(e.key === "Enter") {
            e.preventDefault(); 
            api.getBooks(searchQuery)
            .then((res) => {
                console.log(res);
                onChangeBookCards(res.items);
                onChangeBookCount(res.totalItems);
            })
            .catch((err) => {
                console.log(`${err}: couldn't load books`);
            });
        }
    }

    return (
        <div className="header__search">
            <input className="header__input" type="text" name="search" value={searchQuery} onChange={changeSearch} onKeyDown={findBooks} placeholder="Search for book..." id="search-input" minLength="2" maxLength="40" />
            <button className="header__search-button" type="submit"></button>
        </div>
    );
  }
  
  export default Searcher;