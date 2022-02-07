import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS } from '@contentful/rich-text-types';
import { createClient } from "contentful";
import Link from "next/link";
import Layout from "../../../components/layout";
import styles from '../../../styles/post.module.css'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'blogpost'
    })

    const paths = res.items.map(item => ({
        params: {slug: item.fields.slug}
    }))

    console.log(paths);

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const {items} = await client.getEntries({
        content_type: 'blogpost',
        'fields.slug': params.slug,
    })

    return {
        props:{
            post: items[0]
        }
    }
}

function PostPage({ post }) {
    const { headline,description,content } = post.fields

    const options = {
        renderMark:{
            [MARKS.CODE]: text => <p className={styles.code}><code>{text}</code></p>
        }
    }

    return (
        <Layout pageTitle={headline} description={description}>
            <article>
                <Link href="/blog/">
                    <a>{'<-'} Back the blog</a>
                </Link>
                <h1 className={styles.headline}>{headline}</h1>
                <span>{description}</span>
                <div>
                    {documentToReactComponents(content,options)}
                </div>
            </article>
        </Layout>
    );
}

export default PostPage;