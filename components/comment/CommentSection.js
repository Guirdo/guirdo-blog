import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

function CommentSection({ postId,postTitle }) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        async function getComments() {
            const { data } = await supabase.from('comment')
                .select('*')
                .eq('postId', postId)

            console.log(data)

            setComments(data)
        }

        getComments()
    }, [])

    const updateComments = async () => {
        const { data } = await supabase.from('comment')
            .select('*')
            .eq('postId', postId)

        setComments(data)
    }

    return (
        <div className="comment-section">
            <h2 className="comment-section__title">Comentarios</h2>

            {
                comments.map(c => (
                    <Comment
                        key={c.id}
                        {...c}
                    />
                ))
            }

            <CommentForm
                postId={postId}
                postTitle={postTitle}
                updateComments={updateComments}
            />

        </div>
    );
}

export default CommentSection;