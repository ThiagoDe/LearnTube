import React from 'react';
// import ReactPlayer from 'react-player'
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
        if (!this.props.video) { return null}
        console.log(this.props.video.uploaded_video)
        return(
            <div>
                <h1>{this.props.video.title}</h1>
                {/* <img src={this.props.video.thumbnail}></img> */}

            <video width="320" height="240" controls>
             <source src={this.props.video.videoUrl} type="video/mp4"></source>
            </video>

            </div>
        )
    }

}

export default VideoShow;