import Head from 'next/head'
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './footer';

export default function Layout({ pageTitle, children }) {
    return (
        <>
            <Head>
                <meta name="description" content="Seb Méndez' portfolio and blog" />
                <meta name="keywords" content="HTML, CSS, JavaScript, Portfolio, Guirdo" />
                <meta name="author" content="Seb Méndez - Guirdo" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Seb Méndez {pageTitle && `| ${pageTitle}`}</title>
            </Head>
            
            {children}

            <Footer />

            <ToastContainer />
        </>
    )
}