import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryValue } from '../redux/slices/booksSlice'

function Categories() {
    const [selectedValue, setSelectedValue] = useState('all');
    const dispatch = useDispatch();

    function handleChangeSelect(e) {
        setSelectedValue(e.target.value);
        if(e.target.value === 'all') {
            dispatch(setCategoryValue(''));
        } else {
            dispatch(setCategoryValue(`+subject:${e.target.value}`));
        }
    }

    return ( 
        <div className="header__select-container header__categories">
            <label className="header__label header__categories-label" htmlFor="categories-select">Categories</label>
            <select className="header__select header__categories-select" value={selectedValue} onChange={handleChangeSelect} name="categories" id="categories-select">
                <option className="header__option" value="all">All</option>
                <option className="header__option" value="art">Art</option>
                <option className="header__option" value="biography">Biography</option>
                <option className="header__option" value="computers">Computers</option>
                <option className="header__option" value="history">History</option>
                <option className="header__option" value="medical">Medical</option>
                <option className="header__option" value="poetry">Poetry</option>
            </select>
        </div>
    );
  }
  
  export default Categories;