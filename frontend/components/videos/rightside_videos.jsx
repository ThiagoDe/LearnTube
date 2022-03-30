import React from 'react'
import VideoCard from './video_card'
import { Link } from 'react-router-dom'

class RightsideVideos extends React.Component {
    constructor(props){
        super(props)
        console.log(props, 'from recomended')
    }
    
    componentDidMount(){
        this.props.fetchVideos()
    }

    
    render() {

     const { videos, fetchVideos} = this.props 
     const channles = ['MasterYoda', 'Dumbledore', 'Einstein', 'Master Splinter', 'Hermione', 'Betty Boop', 'Luke Skywalker', 'Issac Newton', 'Lisa Simpson']
     const videosFilter = videos.filter(v => v.id !== this.props.videoId)
        console.log(videosFilter, 'filtered')
     let view 
    return (
        <div className='recommendedVideos'>
            {/* <h2>Recommended</h2> */}
            <div className='recommendedVideos__videos'>
                

                {
                    videosFilter.map(video => (
                        
                        //    { view = Math.floor((Math.random() * 20) + 57)}
                        <Link key={video.id} to={`/videos/${video.id}`} className='link__video'>
                            <VideoCard
                                
                                image={video.thumbnail}
                                title={video.title}
                                views={`${Math.floor((Math.random() * 40) + 7)}k`}
                                channel={`${channles.shift()} ✓`}
                                channelImage={window.profilePic}
                                key={video.id}
                                timestamp={video.created_at}
                            />
                         </Link>
                    ))
                }
               
            </div>
        </div>
    )
    }
}

export default RightsideVideos
