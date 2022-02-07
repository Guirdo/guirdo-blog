import Profile from '../components/profile'
import Layout from '../components/layout'
import Projects from '../components/projects'
import Sneakpeek from './sneakpeek'
import { createClient } from 'contentful'

export const getStaticProps = async () => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({content_type: 'blogpost'})

  return {
    props:{
      posts:res.items,
    }
  }
}

export default function Home({posts}) {

  return (
    <Layout>
      <Profile />
      <Projects />
      <Sneakpeek posts={posts}/>
    </Layout>
  )
}
