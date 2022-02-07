import Profile from '../components/profile'
import Layout from '../components/layout'
import Projects from '../components/Projects'
import Sneakpeek from '../components/Sneakpeek'
import { createClient } from 'contentful'

export const getStaticProps = async () => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const project = await client.getEntries({content_type: 'project'})
  const blogpost = await client.getEntries({content_type: 'blogpost'})

  return {
    props:{
      projects: project.items,
      posts: blogpost.items,
    }
  }
}

export default function Home({projects,posts}) {
  return (
    <Layout>
      <Profile />
      <Projects projects={projects}/>
      <Sneakpeek posts={posts}/>
    </Layout>
  )
}
