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

     const { videos, fetchVideos} = this.props 
        //  console.log(videos)
    return (
        <div className='recommendedVideos'>
            {/* <h2>Recommended</h2> */}
            <div className='recommendedVideos__videos'>
                

                {
                    videos.map(video => (
                        <Link key={video.id} to={`/videos/${video.id}`} className='link__video'>
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
               
            </div>
        </div>
    )
    }
}

export default RecommendedVideos
