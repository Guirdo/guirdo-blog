import Link from "next/link";
import Layout from "../components/layout";
import styles from '../styles/credits.module.css'

function CreditsPage() {
    return (
        <Layout pageTitle="Credtis">
            <div className={styles.container}>
                <div className={styles.credits}>
                    <Link href="/">
                        <a className={styles.link}>{'<-'}Back to home</a>
                    </Link>
                    <ul className={styles.list}>
                        <li>
                            <b>Background photo: </b>
                            <span>Dianini</span>
                        </li>
                        <li>
                            <b>Social networks icons:</b>{' '}
                            <a href="https://www.flaticon.es/iconos-gratis/facebook" title="facebook iconos">Freepik - Flaticon</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default CreditsPage;