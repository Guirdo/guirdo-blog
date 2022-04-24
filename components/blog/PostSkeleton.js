import styles from '../styles/utils/fallback.module.css'

function PostSkeleton() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Loading...</p>
        </div>
    );
}

export default PostSkeleton;