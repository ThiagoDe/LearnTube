import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchVideos } from '../../actions/video_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
    
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchVideos: () => dispatch(fetchVideos()),
})


export default connect(mapStateToProps, mapDispatchToProps)(UserShow);