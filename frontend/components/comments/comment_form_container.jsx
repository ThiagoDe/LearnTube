import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment,
         updateComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    // console.log(state.entities.users[state.session.id])
    return {
        user: state.entities.users[state.session.id],
        video_id: ownProps
    }
}

const mDTP = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment)),
    }
}

export default connect(mSTP, mDTP)(CommentForm);