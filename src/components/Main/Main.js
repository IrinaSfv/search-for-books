import React from "react";
//StylesAndContent
import './Main.css';

function Main({ children }) {
    return (
        <main className="content page__content">
            {children}
        </main>
    );
}

export default Main;