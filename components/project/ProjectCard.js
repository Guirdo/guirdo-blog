import Image from "next/image";

export default function ProjectCard({ project }) {

    const {
        name, 
        description, 
        thumbnail, 
        stack, 
        repository, 
        webSite
    } = project.fields

    return (
        <div className="project-card">
            <Image
                alt={name}
                className="project-card__image"
                src={`https:${thumbnail.fields.file.url}`}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                
            />
            <h3 className="project-card__title">{name}</h3>
            <p className="project-card__description">{description}</p>
            <small className="project-card__technologies">{stack.join(', ')}</small>
            <div className="project-card-btn-group">
                {
                    repository && (
                        <a href={repository} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn--dark btn--block">Repositorio</button>
                        </a>
                    )
                }
                {
                    webSite !== '#' && (
                        <a href={webSite} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn--dark btn--block">Web Site</button>
                        </a>
                    )
                }
            </div>
        </div>
    )
}