import Image from 'next/image'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout'
import SocialNetworks from '../components/utilities/SocialNetworks'

export const getStaticProps = async ({ locale }) => {
  const i18nConf = await serverSideTranslations(locale, ['common','navbar','footer'])

  return {
    props: {
      ...i18nConf
    }
  }
}

export default function Home() {
  const {t} = useTranslation('common')

  return (
    <Layout
      description={t('pageDescription')}
    >
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
          <small className='profile__position'>{t('position')}</small>
          <div className="profile-networks">
            <SocialNetworks />
          </div>
        </div>

        <div className='profile-info'>
          <div className='profile__bio'>
            <p>{t('profileBio1')}</p>
            <p>{t('profileBio2')}</p>
          </div>

          <div className="profile-btn-group">
            <a
              href="https://rxresu.me/guirdo/portfolios-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn--block btn--dark btn--font-md">{t('downloadCV')}</button>
            </a>
            <Link href="/contact">

              <button className="btn btn--block btn--dark btn--font-md">{t('contactMe')}</button>

            </Link>
          </div>
        </div>

      </div>

    </Layout>
  )
}
