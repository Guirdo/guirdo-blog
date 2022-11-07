import Link from 'next/link';
import SocialNetworks from './utilities/SocialNetworks';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-socials">
                <SocialNetworks 
                    color='white'
                />
            </div>
            <p>
                <Link href="/credits" className="footer__credits">
                        Créditos
                </Link>
            </p>
            <p>Hecho con ❤️ por Seb Méndez - 2022</p>
        </footer>
    );
}

export default Footer;