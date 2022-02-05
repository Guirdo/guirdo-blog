import ProjectCard from "./projectCard";
import styles from '../styles/projects.module.css'

const projects = [
    {
        name: 'Zigma',
        image: '/images/projects/zigma.png',
        description: 'A "homemade" Learning Managment system',
        technologies: 'HTML - CSS - JS - REACTJS - FIREBASE',
        repository: 'https://github.com/Guirdo/zigma',
        webSite: 'https://zigma-6c330.web.app/',
    },
    {
        name: 'Sophia Receipts',
        image: '/images/projects/sophia-receipts.png',
        description: 'Web app which generates receipts',
        technologies: 'HTML - CSS - JS - REACTJS',
        repository: 'https://github.com/Guirdo/sophia-receipts',
        webSite: 'https://guirdo.github.io/sophia-receipts/',
    },
    {
        name: 'The Hangman',
        image: '/images/projects/hangman.png',
        description: 'The Hangman game which I created for playing with my students',
        technologies: 'HTML - CSS - JS - REACTJS',
        repository: 'https://github.com/Guirdo/hangman-react',
        webSite: 'https://guirdo.github.io/hangman-react/',
    },
]


export default function Projects() {
    return (
        <section className={styles.container}>
            <h1>My projects</h1>
            <p className={styles.description}>
                These are my best projects so far. But you can visit my{' '}
                <a href="https://github.com/Guirdo" className={styles.link}>Github profile</a>
                , to take a look to all I've done.
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