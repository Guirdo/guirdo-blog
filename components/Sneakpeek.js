import Link from 'next/link';
import PostCard from './PostCard';
import styles from '../styles/sneakpeek.module.css'

function Sneakpeek({ posts }) {
    return (
        <section className={styles.container}>
            <h1>Echa un vistazo a mi blog</h1>

            <p>
                <Link href="/blog/">
                    Ir a mi blog
                </Link>
            </p>

            <div className={styles.postList}>
                {
                    posts.map(post => (
                        <PostCard
                            key={post.sys.id}
                            post={post}
                        />
                    ))
                }
            </div>

        </section>
    );
}

export default Sneakpeek;