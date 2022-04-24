import moment from "moment";
import Link from "next/link";

function PostCard({ post }) {

    const { headline, slug, description } = post.fields

    return (
        <div className="post-card">
            <Link href={`/blog/post/${slug}`} passHref>
                <h3 className="post-card__title">{headline}</h3>
            </Link>
            <p className="post-card__description">{description}</p>
            <small>{moment(post.sys.updatedAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</small>
        </div>
    );
}

export default PostCard;