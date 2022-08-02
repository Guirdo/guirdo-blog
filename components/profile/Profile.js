import Image from "next/image";
import SocialNetworks from "../utilities/SocialNetworks";

export default function Profile() {
    return (
        <section className="profile-section">
            <div className="profile-photo">
                <Image
                    alt="Seb Méndez"
                    className="profile__image"
                    src="/images/profile.jpg"
                    height={280}
                    width={280}
                />
            </div>

            <div className="profile-info">
                <h1 className="profile__name">Seb Méndez</h1>
                <small>Web developer</small>
                <p className="profile__greeting">¡Bienvenido a mi portafolio!</p>
                <div className="profile-networks">
                    <SocialNetworks />
                </div>
            </div>
        </section>
    )
}