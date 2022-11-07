import { createClient } from "contentful";
import PostSkeleton from "../../../components/blog/PostSkeleton";
import PostLayout from "../../../components/blog/PostLayout";
import Article from "../../../components/blog/Article";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'blogpost'
    })

    const paths = res.items.map(item => ({
        params: { slug: item.fields.slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'blogpost',
        'fields.slug': params.slug,
    })

    if (!items.length) {
        return {
            redirect: {
                destination: '/blog',
                permanent: false,
            }
        }
    }

    return {
        props: {
            slug: params.slug,
            post: items[0],
        },
        revalidate: 10,
    }
}

function PostPage({ slug, post }) {
    if (!post) return <PostSkeleton />

    const { headline, tags, description, thumbnail } = post.fields
    //const { id:postId } = post.sys

    return (
        <PostLayout
            slug={slug}
            title={headline}
            description={description}
            keywords={tags}
            thumbnail={thumbnail}
        >
            <div className="post-body">

                <div className="post-main">
                    <Article post={post} />

                    <hr />
                    
                    {/* <CommentSection 
                        postId={postId}
                        postTitle={headline}
                    /> */}
                </div>
            </div>
        </PostLayout>
    );
}

export default PostPage;