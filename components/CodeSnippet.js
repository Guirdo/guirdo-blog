import { Copy, Page } from "iconoir-react";

function CodeSnippet({ snippet }) {

    const handleCopy = () => {
        navigator.clipboard.writeText(snippet.code)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch(err => {
                alert("Sorry, it's doesn't work in your browser");
            });
    }

    return (
        <details 
            className="snippet" 
            open={snippet.isOpen}
        >
            <summary className="snippet__filename"><Page height={16}/>{snippet.filename}</summary>
            <div className="snippet__code">
                <button 
                    className="btn snippet__button"
                    onClick={handleCopy}
                >
                    <Copy />
                </button>
                <pre >
                    <code lang={snippet.language}>
                        {snippet.code}
                    </code>
                </pre>
            </div>
        </details>
    );
}

export default CodeSnippet;