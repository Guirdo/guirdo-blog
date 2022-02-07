import Link from "next/link";
import Layout from "../../components/layout";

export default function BlogPage() {
    return (
        <Layout pageTitle="Blog">
            <section>
                <Link href="/">
                    <a>{'<-'} Back to Home</a>
                </Link>
                <h1>My blog</h1>
            </section>
        </Layout>
    )
} 