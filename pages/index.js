import Profile from '../components/profile'
import Layout from '../components/layout'
import Projects from '../components/Projects'
import Sneakpeek from '../components/Sneakpeek'
import { createClient } from 'contentful'
import ContactForm from '../components/ContactForm'

export const getStaticProps = async () => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const project = await client.getEntries({content_type: 'project',order: 'sys.createdAt'})
  const blogpost = await client.getEntries({content_type: 'blogpost'})

  return {
    props:{
      projects: project.items,
      posts: blogpost.items,
    },
    revalidate: 10,
  }
}

export default function Home({projects,posts}) {
  return (
    <Layout 
      pageTitle="Seb Méndez' portfolio"
      description="Welcome to my professional portfolio"
    >
      <Profile />
      <Projects projects={projects}/>
      <Sneakpeek posts={posts}/>
      <ContactForm />
    </Layout>
  )
}
