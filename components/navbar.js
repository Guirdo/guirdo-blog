import Link from "next/link";
import styles from'../styles/navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navItems}>
                <li className={styles.navBrand}>
                    <Link href='/'>
                        Seb Méndez
                    </Link>
                </li>

                <li className={styles.navItem}>
                    <Link href='/projects'>
                        Projects
                    </Link>
                </li>

                <li className={styles.navItem}>
                    <Link href='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}