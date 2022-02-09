import styles from '../styles/utils/codeSnippet.module.css'

function CodeSnippet({text}) {
    return (
        <code className={styles.code}>
            {text}
        </code>
    );
}

export default CodeSnippet;