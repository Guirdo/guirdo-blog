import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Navbar from './navbar'

export default function Layout({ pageTitle, children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Seb Méndez | {pageTitle}</title>
            </Head>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}