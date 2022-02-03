import Image from "next/image";

function SocialCard({nickname,image}) {
    return (
        <div>
            <Image 
                src={image}
                alt={nickname}
                width={40}
                height={40}
            />
            <h3>{nickname}</h3>
        </div>
    );
}

export default SocialCard;