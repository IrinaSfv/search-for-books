import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import BookPage from "../components/BookPage/BookPage";

function DetailPage() {
    return (
        <>
            <Header />
            <Main>
                <BookPage />
            </Main>
            <Footer />
        </>
    );
}

export default DetailPage;