import { useForm } from "../../hooks/useForm";
import { supabase } from "../../utils/supabaseClient";

function CommentForm({ postId,updateComments }) {

    const [formValues, handleInputChange,reset] = useForm({
        nickname: '',
        comment: ''
    })

    const { nickname, comment } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {_,error} = await supabase.from('comment')
            .insert({
                nickname,
                comment,
                postId
            })

        reset()
        alert("Your comment has been sent")
        updateComments()
    }

    return (
        <form
            className="comment-form"
            onSubmit={handleSubmit}
        >

            <textarea
                className="comment__text-input"
                name="comment"
                value={comment}
                placeholder="Deja un comentario..."
                rows={4}
                onChange={handleInputChange}
            />
            <input
                className="comment__nickname-input"
                type="text"
                name="nickname"
                value={nickname}
                placeholder="Nickname"
                onChange={handleInputChange}
            />
            <button
                className="btn btn--dark"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}

export default CommentForm;