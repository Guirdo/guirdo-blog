import Head from 'next/head'
import Biography from '../components/biography'
import Footer from '../components/footer'
import Projects from '../components/projects'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Seb Méndez' portfolio and blog" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Seb Méndez Guirdo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Seb Méndez</title>
      </Head>
      <Biography />
      <Projects />
      <Footer />
    </>
  )
}
