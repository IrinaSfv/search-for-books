import React from "react";
import { useState } from "react";
// StylesAndContent
import './SortingOptions.css';
// ReduxStates
import { useSelector, useDispatch } from "react-redux";
import { setSortOptionValue } from '../../redux/slices/booksSlice'

function SortingOptions() {
    // Current sort value
    const sortValue = useSelector(state => state.books.sortOptionValue);
    // Value for display on the page
    const [selectedValue, setSelectedValue] = useState(sortValue);

    // Change states
    const dispatch = useDispatch();

    // Change the value on the page and send a new request to the server with a new order
    function handleChangeSelect(e) {
        setSelectedValue(e.target.value);
        dispatch(setSortOptionValue(e.target.value));
    }

    return (
        <div className="header__select-container header__sorting">
            <label className="header__label header__sorting-label" htmlFor="sorting-select">Sorting by</label>
            <select className="header__select header__sorting-select" value={selectedValue} onChange={handleChangeSelect} name="sorting" id="sorting-select">
                <option className="header__option" value="relevance">Relevance</option>
                <option className="header__option" value="newest">Newest</option>
            </select>
        </div>
    );
}

export default SortingOptions;