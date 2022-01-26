import React from 'react'
import VideoCard from './video_card'

function RecommendedVideos() {



    return (
        <div className='recommendedVideos'>
            {/* <h2>Recommended</h2> */}
            <div className='recommendedVideos__videos'>
                <VideoCard image={ window.thumb}
                title={`Learn How to Play Like a Pro`}
                views={`476k`}
                channel={'Thiago BR'}
                channelImage={window.profilePic}
                />
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
        </div>
    )
}

export default RecommendedVideos
