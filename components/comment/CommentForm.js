import { useForm } from "../../hooks/useForm";
import { supabase } from "../../utils/supabaseClient";
import validator from 'validator'
import sendEmail from "../../utils/sendEmail";

function CommentForm({ postId, postTitle, updateComments }) {

    const [formValues, handleInputChange, reset] = useForm({
        nickname: '',
        comment: '',
        email: '',
    })

    const { nickname, comment, email } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (isFormValid()) {
            await supabase.from('comment')
                .insert({
                    nickname,
                    comment,
                    postId
                })

            sendEmail(nickname,comment,postTitle,email)

            reset()
            alert("Your comment has been sent")
            updateComments()
        }
    }

    const isFormValid = () => {
        if (validator.isEmpty(nickname)) {
            return false
        } else if (!validator.isEmail(email)) {
            return false
        } else if (validator.isEmpty(comment)) {
            return false
        }

        return true
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
                className="comment__email-input"
                type="email"
                name="email"
                value={email}
                placeholder="Correo electrónico"
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