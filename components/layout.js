import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Navbar from './navbar'

export default function Layout({ pageTitle,firstWord, children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Seb Méndez | {pageTitle}</title>
            </Head>
            <Navbar />
            <main className={styles.main}>
                <h1>{firstWord}</h1>
                {children}
            </main>
        </div>
    )
}