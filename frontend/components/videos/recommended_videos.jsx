import React from 'react'
import VideoCard from './video_card'
import { Link } from 'react-router-dom'

class RecommendedVideos extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchVideos()
    }

    
    render() {
        // debugger
     const { videos, fetchVideos} = this.props 
        //  console.log(videos)
    return (
        <div className='recommendedVideos'>
            {/* <h2>Recommended</h2> */}
            <div className='recommendedVideos__videos'>
                {/* <VideoCard image={ window.thumb}
                title={`Learn How to Play Like a Pro`}
                views={`476k`}
                channel={'Thiago BR'}
                channelImage={window.profilePic}
                /> */}

                {
                    videos.map(video => (
                        <Link to={`/videos/${video.id}`}>
                            <VideoCard
                                image={video.thumbnail}
                                title={video.title}
                                views={`487k`}
                                channel={'Thiago BR'}
                                channelImage={window.profilePic}
                                key={video.id}
                            />
                         </Link>
                    ))
                }
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
        </div>
    )
    }
}

export default RecommendedVideos
