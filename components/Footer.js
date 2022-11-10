import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import SocialNetworks from './utilities/SocialNetworks';

function Footer() {
    const { t } = useTranslation('footer')
    return (
        <footer className="footer-section">
            <div className="footer-socials">
                <SocialNetworks 
                    color='white'
                />
            </div>
            <p>
                <Link href="/credits" className="footer__credits">
                        {t('credits')}
                </Link>
            </p>
            <p>{t('madeWithLove')}</p>
        </footer>
    );
}

export default Footer;