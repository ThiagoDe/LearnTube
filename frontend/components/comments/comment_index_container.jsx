import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../../actions/comment_actions';
import { createLike,
         updateLike,
        deleteLike } from '../../actions/like_actions';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = ({ entities, session }, ownProps) => {
    // console.log(entities.comments)
    return {
        comments: Object.values(entities.comments),
        userId: session.id,
        video: session.videoId
    }
}

const mDTP = (dispatch) => {
    return {
        fetchComments: (video_id) => dispatch(fetchComments(video_id)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        createLike: (like, userId) => dispatch(createLike(like)),
        updateLike: (like) => dispatch(updateLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like))
    }
}

export default connect(mSTP, mDTP)(CommentIndex);