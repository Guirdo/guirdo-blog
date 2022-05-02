import { createClient } from "contentful";
import Link from "next/link";
import Layout from "../../components/Layout";
import PostCard from "../../components/blog/PostCard";

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

export default function BlogPage({ recentPosts }) {

    return (
        <Layout
            pageTitle="Seb Méndez' Blog"
            description="Encontraras todo esos tutoriales que siempre busque, pero nunca pude encontrar."
        >
            <section className="blog-section">

                <main className="blog-main">
                    <div className="blog__return">
                        <Link href="/">
                            <a>{'<-'}Regresa al Home</a>
                        </Link>
                    </div>

                    <h1 className="blog__title">Blog de Seb Méndez</h1>

                    <p>Encontraras todo esos tutoriales que siempre busque, pero nunca pude encontrar.</p>
                    <div className="blog-post-list">
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