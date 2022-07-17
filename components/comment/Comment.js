import { UserCircleAlt } from "iconoir-react";
import moment from "moment";

function Comment({nickname,created_at,comment}) {
    return (
        <div className="comment">
            <div className="comment-info">
                <span className="comment__photo">
                    <UserCircleAlt
                        strokeWidth={1.5}
                        height={48}
                        width={48}
                    />
                </span>
                <span className="comment__nickname">{nickname}</span>
                <span className="comment__date">
                {moment(created_at).format('YYYY/MM/DD - HH:mm')}
                </span>
            </div>

            <div className="comment-body">
                <p className="comment__text">
                    {comment}
                </p>
            </div>

            <hr />
        </div>
    );
}

export default Comment;