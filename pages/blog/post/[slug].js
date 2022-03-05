import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS,BLOCKS } from '@contentful/rich-text-types';
import { createClient } from "contentful";
import moment from "moment";
import Link from "next/link";
import Layout from "../../../components/Layout";
import CodeSnippet from '../../../components/CodeSnippet'
import styles from '../../../styles/post.module.css'
import PostSkeleton from "../../../components/PostSkeleton";
import Image from "next/image";

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

    const { headline, description, content, } = post.fields

    const options = {
        renderMark: {
            [MARKS.CODE]: text => <CodeSnippet text={text}/>,
        },
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: ({ data: { target } }) => (
                <div className={styles.image}>
                    <Image
                    key={target.sys.id}
                    src={`https:${target.fields.file.url}`}
                    width={target.fields.file.details.image.width}
                    height={target.fields.file.details.image.height}
                    alt={target.fields.title}
                />
                </div>
            ),
            [BLOCKS.LIST_ITEM]: (node,children) => (
                <li className={styles.listItem}>{children}</li>
            ),
            [BLOCKS.HEADING_2]: (node,children) => (
                <h2 className={styles.headline2}>{children}</h2>
            )
        }
    }

    return (
        <Layout 
            pageTitle={headline} 
            description={description}
            
        >
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
                        <p>Autor: Seb Méndez</p>
                        <p>Publicado el: <time dateTime={moment(post.sys.createdAt).format('YYYY-MM-DD')}>{moment(post.sys.createdAt).format('dddd, MMMM Do YYYY')}</time></p>
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