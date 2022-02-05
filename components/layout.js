import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Navbar from './navbar'
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ pageTitle,firstWord, children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Seb Méndez {pageTitle && `| ${pageTitle}`}</title>
            </Head>
            <Navbar />
            <main className={styles.main}>
                <h1>{firstWord}</h1>
                {children}
            </main>

            <ToastContainer />
        </div>
    )
}