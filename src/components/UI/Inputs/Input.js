// TODO: in the future, when the application grows, 
// this component will be used as a universal UI component for inputs on the site,
// so it will be possible to reuse it
import React from "react";
// import './Input.css';

function Input({ type, classTitle, name, value }) {
    return (
        <input className={`input ${classTitle}`} type={type} name={name} value={value} />
    );
}

export default Input;