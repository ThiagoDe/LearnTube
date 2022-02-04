import React, { useState, useEffect } from 'react';
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchComments(this.props.video)
    }

    shuffle(array) {
     return array.sort(() => Math.random() - 0.5);
    }

    render() {
        if (!this.props.comments){return null}
        let comments = this.props.comments
        let deleteComment = this.props.deleteComment
        let randomComments = this.shuffle(comments)

        if (comments) {

            if (Object.values(comments).length === 0) {
                return <p className="scoot-text">This video has no comments.</p>
            }

            
            return (
                <div className="comment-index">
                    {/* <h1>test here </h1> */}
                    {randomComments.map(comment => (
                        <CommentIndexItem
                            key={comment.id}
                            comment={comment}
                            deleteComment={deleteComment}
                            userId={1}
                            // createLike={createLike}
                            // updateLike={updateLike}
                            // deleteLike={deleteLike}                 
                                   />
                    ))}
                </div>
            );
    } else {
        return "loading comments"
    }
    }
}

export default CommentIndex;