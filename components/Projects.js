import ProjectCard from "./ProjectCard";
import styles from '../styles/projects.module.css'

export default function Projects({ projects }) {
    return (
        <section className={styles.container}>
            <h2>Mis proyectos destacados</h2>
            <p className={styles.description}>
                Estos son los mejores proyectos que he hecho hasta ahora. Visita mi{' '}
                <a
                    href="https://github.com/Guirdo"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >perfil de Github</a>
                , para revisar el resto de mis proyectos.
            </p>

            <div className={styles.projectList}>
                {
                    projects.map(p => (
                        <ProjectCard
                            key={p.sys.id}
                            project={p}
                        />
                    ))
                }
            </div>
        </section>
    )
}