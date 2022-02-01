
import Biography from '../components/biography'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout pageTitle={"Home"}>
      <h1>¡Bienvenido a mi portafolio!</h1>

      <Biography />
    </Layout>
  )
}
