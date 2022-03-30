import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUserAlt, faUserAstronaut, faUserCircle, faUserSlash } from '@fortawesome/free-solid-svg-icons';

function CommentIndexItem(props) {
    console.log(props, 'comment index item')
    const { comment } = props;
    const commentMenu = useRef(null)

    function toggleMenu() {
        commentMenu.current.classList.toggle('hide')
    }

    // console.log(props, 'from index item')
    if (comment) {
        return (
            <div className="comment-display">
                 {/* {comment.commenter.profile_image_url ?
                  <img
                    className="user-icon-bigger"
                    src={comment.commenter.profile_image_url}> */}
                {/* </img> : 
                <FontAwesomeIcon
                        className="vii-no-user-icon"
                    icon={['fa', 'user-circle']}
                />} */}
                <FontAwesomeIcon icon={faUserCircle} className="vii-no-user-icon"/>

                <div className="comment-details">
                    <div className="comment-user-date">
                        <h3>{comment.user.username}</h3>
                        <p className="comment-date">{comment.date}</p>
                    </div>
                    <p>{comment.body}</p>
                </div >
                    {/* {/* {comment.commenter.id === props.userId ? <div id="c-menu-container"> */}
                    
                    <svg viewBox="0 0 24 24"
                        onClick={toggleMenu}
                        className="c-icon">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                        </path>
                    </svg> 
                     {/* <div
                        ref={commentMenu}
                        className="comment-menu hide"
                        onClick={() => {
                            props.deleteComment(comment.id)
                            toggleMenu()
                        }}>
                        <svg viewBox="0 0 24 24" className="c-icon">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                            </path>
                        </svg>
                        <p>Delete</p> */}
                    {/* </div>  */}
                {/* </div> : ""}  */}
            </div>
        );
    } else {
        return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div><h2>out else</h2></div>
        
    }

}


export default CommentIndexItem;
