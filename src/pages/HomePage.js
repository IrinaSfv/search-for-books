import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BooksList from "../components/BooksList";

function HomePage() {
    return (
        <>
            <Header />
            <main className="content page__content">
                <BooksList />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;