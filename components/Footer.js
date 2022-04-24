import Image from 'next/image';
import Link from 'next/link';
import SocialNetworks from './utilities/SocialNetworks';

function Footer() {
    return (
        <footer className="footer-section">
            <p>Seb Méndez - 2022</p>
            <div className="footer-socials">
                <SocialNetworks />
            </div>
            <p>
                <a className="footer__credits">
                    <Link href="/credits">
                        Créditos
                    </Link>
                </a>
            </p>
        </footer>
    );
}

export default Footer;