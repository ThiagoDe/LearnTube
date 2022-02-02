import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {   
    // debugger
    return({
        video: state.entities.videos[ownProps.match.params.videoId],
        // videos: Object.values(state.entities.videos)
    })
}


const mapDispatchToProps = (dispatch) => {
    return({
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId))     
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);