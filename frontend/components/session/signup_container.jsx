import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'
import Signup from './signup'

const mSTP = state => ({
    errors: state.errors,
    user: {
            username: '',
            password: ''
        }
})

const mDTP = (dispatch) => ({
    createNewUser: formUser => dispatch(signupUser(formUser))
})

export default connect(mSTP, mDTP)(Signup);