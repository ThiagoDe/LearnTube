import { connect } from 'react-redux';
import UserIconButton from './user_icon_button';
import { logout } from '../../actions/session_actions';

const mSTP = ({ entities, session }) => {
    return {
        currentUser: entities.users[session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(UserIconButton);