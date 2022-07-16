import { UserCircleAlt } from "iconoir-react";

function CommentSection() {
    return (
        <div className="comment-section">
            <div className="comment">
                <div className="comment--info">
                    <span className="comment__photo">
                        <UserCircleAlt
                            strokeWidth={1.5}
                            height={48}
                            width={48}
                        />
                    </span>
                    <span className="comment__nickname">Nickname</span>
                    <span className="comment__date">2022/07/15 - 18:00 </span>
                </div>

                <div className="comment--body">
                    <p className="comment__text">
                        Do id amet anim ea veniam consectetur. Ex anim in occaecat non nostrud fugiat mollit occaecat adipisicing nisi quis reprehenderit in. Esse est ea non laboris aliqua sint officia in duis velit nulla. Dolor in dolore duis proident Lorem aliquip veniam. Excepteur consequat amet et duis et quis Lorem quis culpa. Nulla in ex ut sit dolore occaecat. Qui dolore eiusmod dolor proident.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CommentSection;