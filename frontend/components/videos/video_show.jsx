import React from 'react';
import VideoInfo from './video_info'
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
        const { video } = this.props

        if (!video) { return null}
        // console.log(video.uploaded_video)
        return(
            <div>
            <video width="640" height="390" controls>
             <source src={video.videoUrl} type="video/mp4"></source>
            </video>

            <VideoInfo 
                title={video.title}
                description={video.description}
                created_at={video.created_at}
                views={`76k`}
                channelTitle={`The learner`}
            />

            </div>
        )
    }

}

export default VideoShow;