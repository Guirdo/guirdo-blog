import moment from "moment";
import Image from "next/image";
import Link from "next/link";

function PostCard({ post }) {

    const { headline, slug, description, thumbnail } = post.fields

    return (
        <div className="post-card">
            <div>
                <Image
                    className="post-card__image"
                    alt={headline}
                    src={`https:${thumbnail.fields.file.url}`}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                />
            </div>

            <Link href={`/blog/post/${slug}`} passHref legacyBehavior>
                <h3 className="post-card__title">{headline}</h3>
            </Link>
            <p className="post-card__description">{description}</p>
            <small>{moment(post.sys.updatedAt).format('dddd, MMMM Do YYYY, HH:mm')}</small>
        </div>
    );
}

export default PostCard;