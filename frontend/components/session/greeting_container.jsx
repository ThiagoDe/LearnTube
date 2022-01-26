import Greeting from './greeting.jsx';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);