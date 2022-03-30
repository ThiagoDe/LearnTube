import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment,
         updateComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    // console.log(ownProps, 'from comment form container')
    return {
        user: state.entities.users[state.session.id],
        video_id: ownProps.videoId
    }
}

const mDTP = (dispatch) => {
    return {       
        createComment: (comment) => dispatch(createComment(comment)),
        
    }
}

export default connect(mSTP, mDTP)(CommentForm);