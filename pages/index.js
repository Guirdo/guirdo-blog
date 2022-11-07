import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import SocialNetworks from '../components/utilities/SocialNetworks'

export default function Home() {
  return (
    <Layout
      description="Front-end developer capaz de desarrollar paginas de impacto"
    >

      <section className="profile-section">

        <div className='profile-body'>

          <div className="profile-photo-frame">
            <Image
              alt="Seb Méndez"
              className="profile__image"
              src="/images/profile.jpg"
              height={280}
              width={280}
            />
            <h1 className="profile__name">Seb Méndez</h1>
            <small className='profile__position'>Web developer</small>
            <div className="profile-networks">
              <SocialNetworks />
            </div>
          </div>

          <div className='profile-info'>
            <div className='profile__bio'>
              <p>¡Hola! Mi nombre es Seb Méndez, aka Guirdo. Soy ingeniero en sistemas computacionales y desarrollador web.</p>
              <p>Busco ser parte del cambio de look de la web con un gran equipo que me acepte en sus filas.</p>
            </div>

            <div className="profile-btn-group">
              <a
                href="https://rxresu.me/guirdo/portfolios-resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn--block btn--dark btn--font-md">Descarga mi CV</button>
              </a>
              <Link href="/contact">

                <button className="btn btn--block btn--dark btn--font-md">Contáctame</button>

              </Link>
            </div>
          </div>

        </div>

      </section>

    </Layout>
  )
}
