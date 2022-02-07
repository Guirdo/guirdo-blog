import ProjectCard from "./ProjectCard";
import styles from '../styles/projects.module.css'

export default function Projects({ projects }) {
    return (
        <section className={styles.container}>
            <h1>My projects</h1>
            <p className={styles.description}>
                These are my best projects so far. But you can visit my{' '}
                <a
                    href="https://github.com/Guirdo"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >Github profile</a>
                , to take a look to all I've done.
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