import Link from 'next/link';
import styles from '../styles/about.module.css'

function About() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Hola, soy Seb Méndez</h2>
            <div className={styles.biography}>
                <p>Tambien me puedes encontrar como Guirdo en la mayoria de redes sociales. Soy un front-end developer mexicano con el principal objetivo de hacer paginas web e interfaces de usuario superamigables, que cuando las vea el usuario por primera vez, quede encantado.</p>
                <p>Me gusta la literatura y, sobre todo, la poesía, tambien escribo y de hecho, un poco más abajo encontraras <Link href="/blog">mi blog</Link>. Todos los días me la paso aprendiendo cosas nuevas y creo que las tecnología debe servirnos a nosotros y no al revez.</p>

                <div className={styles.btns}>
                    <a
                        href="https://drive.google.com/file/d/1hky8zBVeOe8GpfXopgkXzdiqQjUV-1t1/view?usp=sharing"
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