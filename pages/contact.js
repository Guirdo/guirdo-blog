import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import styles from '../styles/contact.module.css'
import SocialCard from '../components/socialCard'

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

export default function ContactPage() {
    return (
        <Layout pageTitle="Contact me" firstWord="Do you want to talk?">
            <section className={styles.container}>
                <ContactForm />

                <div>
                    <h2>You can also find me on...</h2>

                    <div className={styles.socials}>
                        {
                            socials.map(s => (
                                <SocialCard
                                    key={s.nickname}
                                    image={s.image}
                                    nickname={s.nickname}
                                    url={s.url}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
}