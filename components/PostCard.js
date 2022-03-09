import moment from "moment";
import Link from "next/link";
import styles from '../styles/utils/postCard.module.css'

function PostCard({ post }) {

    const { headline, slug, description } = post.fields

    return (
        <div className={styles.container}>
            <Link href={`/blog/post/${slug}`} passHref>
                <h2 className={styles.title}>{headline}</h2>
            </Link>
            <small className={styles.description}>{description}</small>
            <small>{moment(post.sys.updatedAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</small>
        </div>
    );
}

export default PostCard;