import { connect } from 'react-redux';
import RecommendedVideos from './recommended_videos';
import { fetchVideos} from '../../actions/video_actions';

const mSTP = ( state ) => {
    // debugger
    return {
        videos: Object.values(state.entities.videos)      
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
    }
}

export default connect(mSTP, mDTP)(RecommendedVideos);