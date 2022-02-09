import styles from '../styles/utils/codeSnippet.module.css'

function CodeSnippet({text}) {
    return (
        <p className={styles.code}>
            <code>{text}</code>
        </p>
    );
}

export default CodeSnippet;