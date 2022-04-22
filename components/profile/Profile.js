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

export default function Profile() {
    return (
        <section className="profile-section">
            <div className="profile-photo">
                <Image
                    alt="Seb Méndez"
                    className="profile__image"
                    src="/images/profile.jpg"
                    height={240}
                    width={240}
                />
            </div>

            <div className="profile-info">
                <h1 className="profile__name">Seb Méndez</h1>
                <small>Web developer</small>
                <p className="profile__greeting">¡Bienvenido a mi portafolio!</p>
                <div className="profile-networks">
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
            </div>
        </section>
    )
}