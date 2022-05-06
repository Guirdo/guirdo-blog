import Link from 'next/link';
import PostCard from './PostCard';

function Sneakpeek({ posts }) {
    return (
        <section className="sneakpeek-section">
            <h2 className="sneakpeek-section__title">Artículos recientes</h2>

            <div className="post-list">
                {
                    posts.map(post => (
                        <PostCard
                            key={post.sys.id}
                            post={post}
                        />
                    ))
                }
                <div className="post-card post-card--view-more">
                    <Link href="/blog/" passHref>
                        <h3 className="post-card__title">Ver más...</h3>
                    </Link>
                </div>
            </div>

        </section>
    );
}

export default Sneakpeek;