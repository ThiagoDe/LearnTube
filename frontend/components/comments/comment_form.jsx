import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentForm(props) {
    const { user, video_id } = props;
    const [body, setBody] = useState("");
    const [hidden, setHidden] = useState(true);

    function handleInput(e) {
        setBody(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!user) {
            props.history.push('/login')
            return
        }
        props.createComment({
            body,
            commenter_id: user.id,
            video_id
        })
        setBody("")
        toggleSubmitBtn(true)
    }

    function toggleSubmitBtn(boolean) {
        setHidden(boolean)
    }

    return (<>
        <div id="comment-form-container">
            {/* {user ? <img
                className="user-icon-bigger"
                src={user.profile_image_url}>
            </img> : <FontAwesomeIcon
                    className="vii-no-user-icon"
                icon={['fa', 'user-circle']}
            />} */}
            <div className="comment-details">
                <form id="comment-form">
                    <div className="hvr-underline-from-center">
                        <input type="text" 
                            placeholder="Add a public comment..."
                            value={body}
                            onChange={handleInput}
                            onFocus={() => toggleSubmitBtn(false)}>
                        </input>
                    </div>
                </form>
            </div>
        </div>
        <div className={`${hidden ? "hidden" : "comment-submit-container"}`}>
            <button
                className="sub-btn"
                id="cancel-btn"
                onClick={() => toggleSubmitBtn(true)}>CANCEL</button>
            <button
                className="sub-btn"
                id="comment-btn"
                onClick={handleSubmit}>COMMENT</button>
        </div></>
    )
}

export default CommentForm;