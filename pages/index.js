import { createClient } from 'contentful'
import Profile from '../components/profile/Profile'
import Layout from '../components/Layout'
import Projects from '../components/project/Projects'
import Sneakpeek from '../components/blog/Sneakpeek'
import About from '../components/About'
import Contact from '../components/contact/Contact'

export const getStaticProps = async () => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const project = await client.getEntries({content_type: 'project',limit:5})
  const blogpost = await client.getEntries({content_type: 'blogpost',limit:5})

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
      pageTitle="Seb Méndez"
      description="Front-end developer desempleado con el objetivo de compartir lo que va aprendiendo"
    >
      
      <header>
        <Profile />
      </header>
      <About />
      <Projects projects={projects}/>
      <Sneakpeek posts={posts}/>
      <Contact />
    </Layout>
  )
}
