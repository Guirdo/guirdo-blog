import Image from "next/image";
import styles from '../styles/projectCard.module.css'

export default function ProjectCard({ name, description, image, technologies, repository, webSite }) {
    return (
        <div className={styles.container}>
            <Image
                alt={name}
                className={styles.image}
                src={image}
                width={300}
                height={200}
                
            />
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.description}>{description}</p>
            <small className={styles.technologies}>{technologies}</small>
            <div className={styles.buttons}>
                {
                    repository !== '#' && (
                        <a href={repository} target="_blank" rel="noopener noreferrer">
                            <button className={styles.button}>Repository</button>
                        </a>
                    )
                }
                {
                    webSite !== '#' && (
                        <a href={webSite} target="_blank" rel="noopener noreferrer">
                            <button className={styles.button}>Web Site</button>
                        </a>
                    )
                }
            </div>
        </div>
    )
}