import React from 'react';
import VideoInfo from './video_info'
import { Link } from 'react-router-dom'
import VideoCard from './video_card'
import RecommendedVideosContainer from './recommended_videos_container'
import CommentFormContainer from '../comments/comment_form_container'
import CommentIndexContainer from '../comments/comment_index_container'

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this.props)
        if (!this.props.match) { return null}
        this.props.fetchVideo(this.props.match.params.videoId);
    }
    
    componentDidUpdate(prevProp) {

        if(this.props.match.params.videoId !== prevProp.match.params.videoId){
           this.props.fetchVideo(this.props.match.params.videoId);
        // (this.props.video).load()
        }
    }
    render() {
        console.log('video show', this.props)
        const { video, videos } = this.props
        if (!video) { return null}
        let view = Math.floor((Math.random() * 20) + 57)

        return(
            <div className="video__show">

               
                <video id='video__frame' src={video.videoUrl}  controls autoPlay/>
            

            <VideoInfo 
                title={video.title}
                description={video.description}
                created_at={video.created_at}
                views={`${view}k`}
                channelTitle={`The learner ✓`}
                video={video}

            />

             <CommentFormContainer videoId={video.id} />
             <CommentIndexContainer videoId={video.id}/>

            <div className='right__col'>
                <RecommendedVideosContainer/>
            </div>
            
            </div>
        )
    }

}

export default VideoShow;