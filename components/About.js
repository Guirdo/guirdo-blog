import Link from 'next/link';
import styles from '../styles/about.module.css'

function About() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Hola, soy Seb Méndez</h1>
            <div className={styles.biography}>
                <p>Tambien me puedes encontrar como Guirdo en la mayoria de redes sociales. Soy un front-end developer mexicano con el principal objetivo de hacer paginas web e interfaces de usuario superamigables, que cuando las vea el usuario por primera vez, quede encantado.</p>
                <p>Me gusta la literatura y, sobre todo, la poesía, tambien escribo y de hecho, un poco más abajo encontraras <Link href="/blog">mi blog</Link>. Todos los días me la paso aprendiendo cosas nuevas y creo que las tecnología debe servirnos a nosotros y no al revez.</p>
            </div>
        </section>
    );
}

export default About;