// TODO: in the future, when the application grows, 
// this component will be used as a universal UI component for selection blocks on the site,
// so it will be possible to reuse it
import React from "react";
// import './Select.css';

function Select({ classSelect, classOption, valueSelect, nameSelect, valueOption, titleOption }) {
    return (
        <select className={`select ${classSelect}`} value={valueSelect} name={nameSelect}>
            <option className={`option ${classOption}`} value={valueOption}>{titleOption}</option>
        </select>
    );
}

export default Select;