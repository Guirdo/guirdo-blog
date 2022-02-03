
import Biography from '../components/biography'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout pageTitle="Home" firstWord="Welcome to my portfolio!">
      <Biography />
    </Layout>
  )
}
