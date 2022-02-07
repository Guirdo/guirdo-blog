import Image from "next/image";
import styles from '../styles/projectCard.module.css'

export default function ProjectCard({ project }) {

    const {
        name, 
        description, 
        thumbnail, 
        stack, 
        repository, 
        webSite} = project.fields

    console.log(stack);

    return (
        <div className={styles.container}>
            <Image
                alt={name}
                className={styles.image}
                src={`https:${thumbnail.fields.file.url}`}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                
            />
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.description}>{description}</p>
            <small className={styles.technologies}>{stack.join(', ')}</small>
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