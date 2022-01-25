import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import VideosIndex from './videos_index';

const mSTP = ( state ) => ({
    videos: Object.values(state.entities.videos)
})

const mDTP = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
})


export default connect(mSTP, mDTP)(VideosIndex);