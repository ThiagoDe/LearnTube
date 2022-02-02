import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import { fetchLikes, createLike,deleteLike, updateLike } from '../../actions/like_actions';
import Likes from './likes'


const mSTP = ( state, ownProps ) => {
    let likes, dislikes;
  likes = (!state.entities.likes) ? null : Object.values(state.entities.likes).filter((like) => {
    return like.video_id === ownProps.video.id
  })

  return{
      likes:likes,
      video: ownProps.video
  }
}

const mDTP = (dispatch) => ({
    // fetchVideos: () => dispatch(fetchVideos()),
    fetchLikes: (videoId) => dispatch(fetchLikes(videoId)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like)),

})


export default connect(mSTP, mDTP)(Likes);