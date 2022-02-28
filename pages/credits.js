import Link from "next/link";
import Layout from "../components/Layout";
import styles from '../styles/credits.module.css'

function CreditsPage() {
    return (
        <Layout pageTitle="Credits">
            <div className={styles.container}>
                <div className={styles.credits}>
                    <Link href="/">
                        <a className={styles.link}>{'<-'}Back to home</a>
                    </Link>
                    <ul className={styles.list}>
                        <li>
                            <b>Background photo: </b>
                            <a
                                href="https://www.instagram.com/diana.vzqx/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Dianini</a>
                        </li>
                        <li>
                            <b>Social networks icons:</b>{' '}
                            <a
                                href="https://www.flaticon.es/packs/social-network-3"
                                title="Social network | Filled"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Freepik - Flaticon</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default CreditsPage;