// TODO: in the future, when the application grows, 
// this component will be used as a universal UI component for CTA-buttons on the site,
// so it will be possible to reuse it
import React from "react";
// import './Button.css';

function Button({ type, classTitle }) {
    return (
        <button className={`button ${classTitle}`} type={type}></button>
    );
}

export default Button;