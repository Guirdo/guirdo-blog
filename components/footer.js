import Link from 'next/link';
import styles from '../styles/footer.module.css'

function Footer() {
    return (
        <footer className={styles.container}>
            <p>Seb Méndez - 2022</p>
            <p>
                <Link href="/credits">
                    Creditos
                </Link>
            </p>
        </footer>
    );
}

export default Footer;