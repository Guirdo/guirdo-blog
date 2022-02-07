import Link from "next/link";
import styles from '../styles/utils/postCard.module.css'

function PostCard({ post }) {

    const { headline, slug, description } = post.fields

    return (
        <div className={styles.container}>
            <h3>{headline}</h3>
            <small>{description}</small>
            <p>
                <Link href={`/blog/post/${slug}`}>
                    Read it
                </Link>
            </p>
        </div>
    );
}

export default PostCard;