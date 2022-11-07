import { createClient } from "contentful";
import Layout from "../components/Layout";
import ProjectCard from "../components/project/ProjectCard";

function ProjectsPage({projects}) {
    return (
        <Layout
            pageTitle="Proyectos"
            description="Proyectos de Seb Méndez"
        >
            <section className="projects-section">
                <div className="projects-body">
                    <h1>Mis proyectos destacados</h1>
                    <p className="projects-body__description">
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
                </div>
            </section>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({
        content_type: 'project',
    })

    return {
        props:{
            projects: res.items
        }
    }
}

export default ProjectsPage;