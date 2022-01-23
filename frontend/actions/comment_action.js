import * as APIUtil from "../util/comment_api_util"

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVED_COMMENT = 'RECEIVED_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments,
    }
}

const receivedComment = comment => {
    return {
        type: RECEIVED_COMMENT,
        comment,
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId,
    }
}

export const deleteComment = (comment) => dispatch => {
    return  APIUtil.deleteComment(comment)
        .then( comment=> dispatch(removeComment(comment.id)))
}

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment)
        .then( comment => dispatch(receivedComment(comment)))
)

export const fetchComments = videoId => dispatch => (
    APIUtil.fetchComments(videoId)
        .then(comments => dispatch(receiveAllComments(comments)))
)