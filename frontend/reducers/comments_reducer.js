import { RECEIVE_ALL_COMMENTS, RECEIVED_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVED_COMMENT:
            nextState[action.comment.id]= action.comment;
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return oldState;
    }
};

export default commentsReducer;