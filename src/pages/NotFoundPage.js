import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageNotFound from "../components/PageNotFound";

function NotFoundPage() {
    return (
        <>
            <Header />
            <main className="content page__content">
                <PageNotFound />
            </main>
            <Footer />
        </>
    );
}

export default NotFoundPage;