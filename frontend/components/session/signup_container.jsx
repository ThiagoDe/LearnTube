import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'
import Signup from './signup'

const mSTP = state => ({
    user: {
            username: '',
            password: ''
        }
})

const mDTP = (dispatch) => ({
    createNewUser: formUser => dispatch(signupUser(formUser))
})

export default connect(mSTP, mDTP)(Signup);