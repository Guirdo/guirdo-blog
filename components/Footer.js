import Image from 'next/image';
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
                <Link href="/credits">
                    <a className="footer__credits">
                        Créditos
                    </a>
                </Link>
            </p>
            <p>Made by Seb Méndez with ❤️ - 2022</p>
        </footer>
    );
}

export default Footer;