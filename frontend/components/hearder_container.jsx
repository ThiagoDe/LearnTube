import { connect } from 'react-redux';
import Header from './header';


const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
      
    }
}

const mDTP = (dispatch) => {
    return {
       logout: () => dispatch(logout()),
    }
}

export default connect(mSTP, mDTP)(Header);