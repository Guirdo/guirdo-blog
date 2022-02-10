import { createClient } from "contentful";
import Link from "next/link";
import Layout from "../../components/layout";
import PostCard from "../../components/PostCard";
import styles from '../../styles/blog.module.css'

export const getStaticProps = async () => {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({
        content_type: 'blogpost',
        limit: 10,
    })

    return {
        props: {
            recentPosts: res.items
        },
        revalidate: 10,
    }
}

export default function BlogPage({recentPosts}) {

    return (
        <Layout 
            pageTitle="Seb Méndez' Blog"
            description="Encontraras todo esos tutoriales que siempre busque, pero nunca pude encontrar."
        >
            <section className={styles.container}>

                <main className={styles.main}>
                    <Link href="/">
                        <a>{'<-'}Regresa al Home</a>
                    </Link>
                    <h1 className={styles.title}>Blog de Seb Méndez</h1>

                    <p>Encontraras todo esos tutoriales que siempre busque, pero nunca pude encontrar.</p>
                    <div className={styles.postList}>
                        {
                            recentPosts.map(post => (
                                <PostCard 
                                    key={post.sys.id}
                                    post={post}
                                />
                            ))
                        }
                    </div>

                </main>

            </section>
        </Layout>
    )
} 