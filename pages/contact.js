import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import styles from '../styles/contact.module.css'
import SocialCard from '../components/socialCard'

const socials =[
    {
        nickname: 'gurdo21',
        image: '/images/socials/instagram.png',
    }
]

export default function ContactPage() {
    return (
        <Layout pageTitle="Contact me" firstWord="Do you want to talk?">
            <section className={styles.container}>
                <ContactForm />

                <div>
                    <h2>You can also find me at...</h2>

                    <div>
                        {
                            socials.map(s => (
                                <SocialCard 
                                    key={s.nickname}
                                    image={s.image}
                                    nickname={s.nickname}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
}