import Link from 'next/link';
import styles from '../styles/about.module.css'

function About() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>¡Hola, soy Seb Méndez!</h2>
            <div className={styles.biography}>
                <p>Soy un web developer full-stack mexicano, al que le apasionan las páginas web que son encantadoras y ligeras para el usuario final, por lo que he estado perfeccionando mis habilidades con HTML, CSS Y JavaScript. Creo fervientemente que la tecnología debe servirnos a nosotros, y no al revés.</p>
                <p>Me gusta la literatura y, sobre todo, la poesía, tambien escribo y de hecho, un poco más abajo encontraras <Link href="/blog">mi blog</Link>. Todos los días me la paso aprendiendo cosas nuevas y me gusta enseñarle lo que sé a los demas.</p>

                <div className={styles.btns}>
                    <a
                        href="https://www.canva.com/design/DAE5tdMBqn8/dWzX-peA4vTiJDL5soaTOQ/view?utm_content=DAE5tdMBqn8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.btn}>Descarga mi CV</button>
                    </a>
                    <Link href="#contact">
                        <a>
                            <button className={styles.btn}>Contáctame</button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;