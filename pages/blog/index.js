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
        <Layout pageTitle="Seb Méndez' Blog">
            <section className={styles.container}>

                <main className={styles.main}>
                    <Link href="/">
                        <a>{'<-'} Back to Home</a>
                    </Link>
                    <h1 className={styles.title}>My blog</h1>

                    <p>You'll find articles writen in Spanish and English since I'm from Mexico and I want to share all I know in these good languages.</p>

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