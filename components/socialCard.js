import Image from "next/image";
import styles from '../styles/utils/socials.module.css'

function SocialCard({nickname,image,url}) {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.container}
        >
            <Image 
                src={image}
                alt={nickname}
                width={40}
                height={40}
                layout="fixed"
            />
            <h4>{nickname}</h4>
        </a>
    );
}

export default SocialCard;