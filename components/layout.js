import Head from 'next/head'
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

export default function Layout({ pageTitle,description, children }) {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content="HTML, CSS, JavaScript, Portfolio, Guirdo" />
                <meta name="author" content="Seb Méndez - Guirdo" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="google-site-verification" content="qf60GZVzUJWInF1LZpvlBERkLpcdi14vU8jw3GOsu3k" />
                <title>{pageTitle}</title>
            </Head>
            
            {children}

            <Footer />

            <ToastContainer />
        </>
    )
}