import Image from "next/image";
import Link from "next/link";
import styles from '../styles/biography.module.css'

export default function Biography() {
    return (
        <section className={styles.container}>
            <div className={styles.profile}>
                <Image
                    alt="Seb Méndez"
                    className={styles.profilePhoto}
                    src="/images/profile.jpg"
                    height={400}
                    width={400}
                />
            </div>

            <div className={styles.biographyText}>
                <p>Yo soy Seb Méndez, pero tambien me puedes encontrar como Guirdo. Tengo 24 años y estudie la carrera de Ingenieria en Sistemas Computacionales. Actualmente sigo mis estudios en Platzi y me estoy especializando en el desarrollo front-end, pero tambien he probado tecnologias de back-end. Dale click al botón de abajo.</p>
                <Link href="/projects">
                    <button className={styles.btnProyectos}>
                        Echale un vistazo a lo ultimo que he hecho
                    </button>
                </Link>
            </div>
        </section>
    )
}