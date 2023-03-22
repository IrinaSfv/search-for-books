import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import BooksList from "../components/BookList/BooksList";

function HomePage() {
    return (
        <>
            <Header />
            <Main>
                <BooksList />
            </Main>
            <Footer />
        </>
    );
}

export default HomePage;