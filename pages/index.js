import Head from 'next/head'
import Biography from '../components/biography'
import Layout from '../components/layout'
import Projects from '../components/projects'

export default function Home() {
  return (
    <Layout>
      <Biography />
      <Projects />
    </Layout>
  )
}
