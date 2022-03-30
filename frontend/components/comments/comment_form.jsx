import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentForm(props) {
    // console.log(props,'comment form')
    const { user, video_id } = props;
    const [body, setBody] = useState("");
    const history = useHistory();
    // const [username, ] = useEffect('')
    const [hidden, setHidden] = useState(true);

    function handleInput(e) {
        setBody(e.currentTarget.value);
        // setUsername(props.user.username)
    }

//     useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

    function handleSubmit(e) {
        e.preventDefault();
        if (!user) {
            // props.history.push('/login')
           history.push('/signin')
            return
        }
        // debugger
        // console.log(body, 'body from commet form')
        props.createComment({
            body,
            user_id: user.id,
            video_id,
            user
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