import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS,BLOCKS } from '@contentful/rich-text-types';
import { createClient } from "contentful";
import moment from "moment";
import Link from "next/link";
import Layout from "../../../components/layout";
import CodeSnippet from '../../../components/CodeSnippet'
import styles from '../../../styles/post.module.css'
import PostSkeleton from "../../../components/PostSkeleton";

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

    if(!items.length){
        return{
            redirect: {
                destination: '/blog',
                permanent: false,
            }
        }
    }

    return {
        props: {
            post: items[0]
        }
    }
}

function PostPage({ post }) {
    if(!post) return <PostSkeleton />


    const { headline, description, content } = post.fields

    const options = {
        renderMark: {
            [MARKS.CODE]: text => <CodeSnippet text={text}/>,
        },
    }

    return (
        <Layout pageTitle={headline} description={description}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <Link href="/blog/">
                        <a className={styles.linkBlog}>Seb Méndez' Blog</a>
                    </Link>
                </div>
                <article className={styles.article}>
                    <h1 className={styles.headline}>{headline}</h1>
                    <p className={styles.description}>{description}</p>
                    <div>
                        <p>Author: Seb Méndez</p>
                        <p>Posted: {moment(post.sys.createdAt).format('dddd, MMMM Do YYYY')}</p>
                    </div>

                    <hr />
                    <div className={styles.content}>
                        {documentToReactComponents(content, options)}
                    </div>
                </article>
                <div>

                </div>
            </div>
        </Layout>
    );
}

export default PostPage;