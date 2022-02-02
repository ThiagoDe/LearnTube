import React from 'react';
import VideoInfo from './video_info'
import { Link } from 'react-router-dom'
import VideoCard from './video_card'
import RecommendedVideosContainer from './recommended_videos_container'
import CommentFormContainer from '../comments/comment_form_container'

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this.props)
        if (!this.props.match) { return null}
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { video, videos } = this.props

        if (!video) { return null}
        // console.log(RecommendedVideosContainer)

        return(
            <div className="video__show">
                <video id="test" controls>
                    <source src={video.videoUrl} type="video/mp4"></source>
                </video>

            

            <VideoInfo 
                title={video.title}
                description={video.description}
                created_at={video.created_at}
                views={`76k`}
                channelTitle={`The learner`}
                video={video}

                // videoLikes={video.likes} maybe?
            />

             <CommentFormContainer videoId={video.id} />
            {/* <CommentIndexContainer /> */}

            <div className='right__col'>
                <RecommendedVideosContainer/>
            </div>
            
            </div>
        )
    }

}

export default VideoShow;