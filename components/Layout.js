import Head from 'next/head'
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ pageTitle, description, children }) {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content="HTML, CSS, JavaScript, Portfolio, Guirdo" />
                <meta name="author" content="Seb Méndez - Guirdo" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.guirdo.xyz/" />
                <meta property="og:title" content="Seb Méndez - Guirdo" />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={'/images/profile.jpg'} />

                {/* Twitter Card */}
                <meta property="twitter:card" content={'/images/profile.jpg'} />
                <meta property="twitter:url" content="https://www.guirdo.xyz/" />
                <meta property="twitter:title" content="Seb Méndez - Guirdo" />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={'/images/profile.jpg'} />

                <meta name="google-site-verification" content="qf60GZVzUJWInF1LZpvlBERkLpcdi14vU8jw3GOsu3k" />
                <title>{`Seb Méndez${pageTitle ? ` | ${pageTitle}` : ''}`}</title>
            </Head>

            <header>
                <Navbar />
            </header>

            {children}

            <Footer />

            <ToastContainer />
        </>
    )
}