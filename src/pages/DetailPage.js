import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookPage from "../components/BookPage";

function DetailPage() {
    return (
        <>
            <Header />
            <main className="content page__content">
                <BookPage />
            </main>
            <Footer />
        </>
    );
}

export default DetailPage;