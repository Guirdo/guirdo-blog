import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import styles from '../styles/contact.module.css'

export default function ContactPage () {
    return(
        <Layout pageTitle="Contact me" firstWord="Do you want to talk?">
            <section className={styles.container}>
                <div>
                    <ContactForm />
                </div>

                <div>
                    <h2>You can also find me at...</h2>
                </div>
            </section>
        </Layout>
    )
}