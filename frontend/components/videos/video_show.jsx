import React from 'react';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        if (!this.props.video) { return null}

        return(
            <div>
                <h1>thumbnail test</h1>
                <h1>{this.props.video.title}</h1>
                <img src={this.props.video.thumbnail}></img>
            </div>
        )
    }

}

export default VideoShow;