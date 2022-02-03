import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../../actions/comment_actions';
import { createLike,
         updateLike,
        deleteLike } from '../../actions/like_actions';

const mSTP = ({ entities, session }) => {
    console.log(Object.values(entities.comments))
    return {
        comments: entities.comments,
        userId: session.id
    }
}

const mDTP = (dispatch) => {
    return {
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        createLike: (like, userId) => dispatch(createLike(like)),
        updateLike: (like) => dispatch(updateLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like))
    }
}

export default connect(mSTP, mDTP)(CommentIndex);