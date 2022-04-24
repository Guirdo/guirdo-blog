import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
    return (
        <section className="projects-section">
            <h2 className="projects-section__title">Mis proyectos destacados</h2>
            <p className="projects-section__description">
                Estos son los mejores proyectos que he hecho hasta ahora. Visita mi{' '}
                <a
                    href="https://github.com/Guirdo"
                    
                    target="_blank"
                    rel="noopener noreferrer"
                >perfil de Github</a>
                , para revisar el resto de mis proyectos.
            </p>

            <div className="projects-list">
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