import { Facebook, GitHub, Instagram, LinkedIn } from "iconoir-react";
import Image from "next/image";

const socials = [
    {
        nickname: 'Seb Méndez',
        icon: <LinkedIn strokeWidth={2.5}/>,
        url: 'https://www.linkedin.com/in/seb-m%C3%A9ndez-52b528216/',
    },
    {
        nickname: '@guirdo21',
        icon: <Instagram strokeWidth={2.5}/>,
        url: 'https://www.instagram.com/guirdo21/',
    },
    {
        nickname: 'Seb Méndez',
        icon: <Facebook strokeWidth={2.5}/>,
        url: 'https://www.facebook.com/guirdo21/',
    },
    {
        nickname: 'Guirdo',
        icon: <GitHub strokeWidth={2.5}/>,
        url: 'https://github.com/Guirdo',
    },
]

function SocialNetworks() {
    return (
        <div className="social-networks">
            {
                socials.map(s => (
                    <a
                        key={s.url}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="social-networks__icon">
                            {s.icon}
                        </span>
                    </a>
                ))
            }
        </div>
    );
}

export default SocialNetworks;