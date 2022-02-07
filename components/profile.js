import Image from "next/image";
import Link from "next/link";
import styles from '../styles/biography.module.css'

const socials = [
    {
        nickname: 'Seb Méndez',
        image: '/images/socials/linkedin.png',
        url: 'https://www.linkedin.com/in/seb-m%C3%A9ndez-52b528216/',
    },
    {
        nickname: '@guirdo21',
        image: '/images/socials/instagram.png',
        url: 'https://www.instagram.com/guirdo21/',
    },
    {
        nickname: 'Seb Méndez',
        image: '/images/socials/facebook.png',
        url: 'https://www.facebook.com/guirdo21/',
    },
    {
        nickname: 'Guirdo',
        image: '/images/socials/github.png',
        url: 'https://github.com/Guirdo',
    },
]

export default function Profile() {
    return (
        <section className={styles.container}>
            <div className={styles.profile}>
                <Image
                    alt="Seb Méndez"
                    className={styles.profilePhoto}
                    src="/images/profile.jpg"
                    height={240}
                    width={240}
                />
            </div>

            <div className={styles.biography}>
                <h2>Seb Méndez</h2>
                <small>Front-end developer</small>
                <p>Welcome to my portfolio!</p>
                <div className={styles.socials}>
                    {
                        socials.map(s => (
                            <a
                                key={s.url}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={s.image}
                                    alt={s.nickname}
                                    width={28}
                                    height={28}
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}