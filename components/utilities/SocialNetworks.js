import Image from "next/image";

const socials = [
    {
        nickname: 'Seb Méndez',
        image: '/images/socials/linkedin.png',
        url: 'https://www.linkedin.com/in/seb-m%C3%A9ndez-52b528216/',
    },
    {
        nickname: '@guirdo21',
        image: '/images/socials/instagram.png',
        url: 'https://www.instagram.com/guirdo21/',
    },
    {
        nickname: 'Seb Méndez',
        image: '/images/socials/facebook.png',
        url: 'https://www.facebook.com/guirdo21/',
    },
    {
        nickname: 'Guirdo',
        image: '/images/socials/github.png',
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
                        <Image
                            src={s.image}
                            alt={s.nickname}
                            width={28}
                            height={28}
                        />
                    </a>
                ))
            }
        </div>
    );
}

export default SocialNetworks;