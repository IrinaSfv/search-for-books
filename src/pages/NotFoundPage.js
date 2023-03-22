import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import PageNotFound from "../components/PageNotFound/PageNotFound";

function NotFoundPage() {
    return (
        <>
            <Header />
            <Main>
                <PageNotFound />
            </Main>
            <Footer />
        </>
    );
}

export default NotFoundPage;