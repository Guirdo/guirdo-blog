import ProjectCard from "./projectCard";
import styles from '../styles/projects.module.css'

const projects = [
    {
        name: 'Zigma',
        image: '/images/projects/zigma.png',
        description: 'Sistema de gestión de aprendizaje "casero".',
        technologies: 'HTML - CSS - JS - REACTJS - FIREBASE',
        repository: 'https://github.com/Guirdo/zigma',
        webSite: 'https://zigma-6c330.web.app/',
    },
    {
        name: 'Sophia Receipts',
        image: '/images/projects/sophia-receipts.png',
        description: 'Web app para generar recibos de cobro',
        technologies: 'HTML - CSS - JS - REACTJS',
        repository: 'https://github.com/Guirdo/sophia-receipts',
        webSite: 'https://guirdo.github.io/sophia-receipts/',
    },
    {
        name: 'The Hangman',
        image: '/images/projects/hangman.png',
        description: 'Juego del ahorcado que utilizaba para jugar con mis alumnos',
        technologies: 'HTML - CSS - JS - REACTJS',
        repository: 'https://github.com/Guirdo/hangman-react',
        webSite: 'https://guirdo.github.io/hangman-react/',
    },
]


export default function Projects() {
    return (
        <section className={styles.container}>
            <h1>My projects</h1>
            <p className={styles.description}>Aquí encontraras la lista de mis proyectos más destacados. Tambien puedes visitar mi{' '}
                <a href="https://github.com/Guirdo" className={styles.link}>perfil de Github</a>
                , para ver todo el código que he hecho hasta ahora.
            </p>

            <div className={styles.projectList}>
                {
                    projects.map(p => (
                        <ProjectCard
                            key={p.name}
                            name={p.name}
                            description={p.description}
                            image={p.image}
                            technologies={p.technologies}
                            repository={p.repository}
                            webSite={p.webSite}
                        />
                    ))
                }
            </div>
        </section>
    )
}