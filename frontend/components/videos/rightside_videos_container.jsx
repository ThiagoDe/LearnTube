import { connect } from 'react-redux';
import RightsideVideos from './rightside_videos';
import { fetchVideos} from '../../actions/video_actions';

const mSTP = ( state, ownProps ) => {
    // console.log(state, 'from recommeded container')
    // console.log(ownProps, 'from recommeded container')
    // debugger
    return {
        videos: Object.values(state.entities.videos),
        videoId: ownProps.videoId
        // video: state.entities.videos[ownProps.match.params.videoId],      
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
    }
}

export default connect(mSTP, mDTP)(RightsideVideos);