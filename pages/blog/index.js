import { createClient } from "contentful";
import Link from "next/link";
import Layout from "../../components/Layout";
import PostCard from "../../components/blog/PostCard";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({locale}) => {
    const i18nConf = await serverSideTranslations(locale, ['blog','navbar','footer'])

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
            recentPosts: res.items,
            ...i18nConf
        },
        revalidate: 10,
    }
}

export default function BlogPage({ recentPosts }) {
    const { t } = useTranslation('blog')

    return (
        <Layout
            pageTitle="Blog"
            description={t('pageDescription')}
        >
            <main className="blog-main">

                <h1 >{t('blogTitle')}</h1>

                <p>{t('pageDescription')}</p>

                <h2 className="blog-subtitle">{t('recentPosts')}</h2>
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
        </Layout>
    );
} 