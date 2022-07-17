import CommentForm from "./CommentForm";
import Comment from "./Comment";

function CommentSection() {
    return (
        <div className="comment-section">
            <h2 className="comment-section__title">Comentarios</h2>
            <Comment />

            <CommentForm />

        </div>
    );
}

export default CommentSection;