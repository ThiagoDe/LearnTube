import { RECEIVE_ALL_COMMENTS } from "../actions/comment_actions";

import {
    RECEIVED_COMMENT,
    REMOVE_COMMENT,
} from '../actions/comment_actions';
import {
    RECEIVE_VIDEO,
} from '../actions/video_actions';
import {
    RECEIVED_LIKES
} from '../actions/like_actions';

const commentsReducer = (state = [], action) => {
    // console.log(action, 'from comments reducer')
    Object.freeze(state);
    // debugger
    let newState = [state]
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
           return Object.assign({}, action.comments) 

        // case RECEIVE_VIDEO:
        //     return action.video.comments

        case RECEIVED_COMMENT:
            // debugger
            newState.unshift(action.comment);
            // return Object.assign(...newState, action.comment) 
            return newState

        case REMOVE_COMMENT:
            return newState.filter(comment => comment.id != action.commentId);

        case RECEIVED_LIKES:
            if (action.like.likeable_type === "Comment") {
                return newState.map((comment) => {
                    if (comment.id !== action.like.likeable_id) {
                        return comment
                    }

                    comment.like = action.like
                    return comment
                })
            } else { return state; }
            break;

        default:
            return state;
    }
}

export default commentsReducer;