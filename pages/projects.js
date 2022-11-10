import { createClient } from "contentful";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import ProjectCard from "../components/project/ProjectCard";

function ProjectsPage({ projects }) {
    const { t } = useTranslation('projects')
    return (
        <Layout
            pageTitle="Proyectos"
            description="Proyectos de Seb Méndez"
        >
            <div className="projects-body">
                <h1>{t('featuredProjects')}</h1>
                <p className="projects-body__description">
                    {t('description1')}{' '}
                    <a
                        href="https://github.com/Guirdo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >{t('githubProfile')}</a>{' '}
                    {t('description2')}
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
        </Layout>
    );
}

export const getStaticProps = async ({ locale }) => {
    const i18nConf = await serverSideTranslations(locale, ['projects','navbar','footer'])
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
        locale,
    })

    const res = await client.getEntries({
        content_type: 'project',
        locale
    })

    return {
        props: {
            projects: res.items,
            ...i18nConf
        },
        revalidate: 5
    }
}

export default ProjectsPage;