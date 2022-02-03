import Link from "next/link";
import styles from '../styles/navbar.module.css'

const navItems = [
    {
        label: 'Seb Méndez',
        url: '/',
        style: styles.navBrand,
    },
    {
        label: 'Blog',
        url: '/blog',
        style: styles.navItem,
    },
    {
        label: 'Projects',
        url: '/projects',
        style: styles.navItem,
    },
    {
        label: 'Contact',
        url: '/contact',
        style: styles.navItem,
    },
]

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navItems}>
                {
                    navItems.map(item => (
                        <li className={item.style}>
                            <Link href={item.url}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}