import Head from "next/head";
import Footer from "./Footer";

function PostLayout({
    slug,title, description, keywords,thumbnail,children
}) {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Seb Méndez - Guirdo" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={`guirdo.xyz/blog/post/${slug}`} />
                <meta property="og:image" content={`https:${thumbnail.fields.file.url}`} />
                <meta property="og:image:alt" content={title} />
                <meta property="og_site_name" content={title} />

                {/* Twitter Card */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={`guirdo.xyz/blog/post/${slug}`} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description}/>
                <meta property="twitter:image" content={`https:${thumbnail.fields.file.url}`}/>

                <title>{title}</title>
            </Head>

            {children}

            <Footer />
        </>
    );
}

export default PostLayout;