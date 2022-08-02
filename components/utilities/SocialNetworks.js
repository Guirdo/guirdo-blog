import { Facebook, GitHub, Instagram, LinkedIn } from "iconoir-react";

const socials = [
    {
        nickname: 'Seb Méndez',
        icon: (color)=><LinkedIn color={`${color}`} strokeWidth={2.0}/>,
        url: 'https://www.linkedin.com/in/seb-mendez',
    },
    {
        nickname: '@guirdo21',
        icon: (color)=><Instagram color={`${color}`} strokeWidth={2.0}/>,
        url: 'https://www.instagram.com/guirdo21/',
    },
    {
        nickname: 'Seb Méndez',
        icon: (color)=><Facebook color={`${color}`} strokeWidth={2.0}/>,
        url: 'https://www.facebook.com/guirdo21/',
    },
    {
        nickname: 'Guirdo',
        icon: (color)=><GitHub color={`${color}`} strokeWidth={2.0}/>,
        url: 'https://github.com/Guirdo',
    },
]

function SocialNetworks({color = 'black'}) {
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
                            {s.icon(color)}
                        </span>
                    </a>
                ))
            }
        </div>
    );
}

export default SocialNetworks;