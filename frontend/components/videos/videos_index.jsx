import React from 'react';
import { Link } from 'react-router-dom';


class VideosIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const { videos } = this.props.videos
        return (
            <div>
                {
                    videos.map( video => (
                        <VideoShow 
                        video={video}
                        key={video.id}
                        />
                    ))
                }
                <Link to={'/'}> </Link>
            </div>
        )
    }

}
export default VideosIndex 