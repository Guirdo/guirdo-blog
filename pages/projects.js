import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";
import styles from '../styles/projects.module.css'

const projects = [
    {
        name: 'Zigma',
        image: '/images/zigma.png',
        description: 'Sistema de gestión de aprendizaje "casero".',
        technologies: 'HTML - CSS - JS - REACTJS - FIREBASE',
        repository: 'https://github.com/Guirdo/zigma',
        webSite: 'https://zigma-6c330.web.app/',
    },
    {
        name: 'Sophia Receipts',
        image: '/images/sophia-receipts.png',
        description: 'Web app para generar recibos de cobro',
        technologies: 'HTML - CSS - JS - REACTJS',
        repository: 'https://github.com/Guirdo/sophia-receipts',
        webSite: 'https://guirdo.github.io/sophia-receipts/',
    },
    {
        name: 'The Hangman',
        image: '/images/hangman.png',
        description: 'Juego del ahorcado que utilizaba para jugar con mis alumnos',
        technologies: 'HTML - CSS - JS - REACTJS',
        repository: 'https://github.com/Guirdo/hangman-react',
        webSite: 'https://guirdo.github.io/hangman-react/',
    },
]

export default function ProjectsPage() {
    return (
        <Layout pageTitle="Projects" firstWord="Take a look to my projects">
            <p className={styles.description}>Aquí encontraras la lista de mis proyectos más destacados. Tambien puedes visitar mi{' '}
                <a href="https://github.com/Guirdo" className={styles.link}>perfil de Github</a>
                , para ver todo el código que he hecho hasta ahora.
            </p>

            <div className={styles.projectList}>
                {
                    projects.map(p =>(
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
        </Layout>
    )
}