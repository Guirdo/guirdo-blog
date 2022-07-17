function CommentForm() {
    return (
        <form
            className="comment-form"
        >
            
            <textarea
                className="comment__text-input"
                placeholder="Deja un comentario..."
                rows={4}
            />
            <input
                className="comment__nickname-input"
                type="text"
                placeholder="Nickname"
            />
            <button
                className="btn btn--dark"
            >
                Submit
            </button>
        </form>
    );
}

export default CommentForm;