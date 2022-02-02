import React from 'react';
import LikesContainer from './likes_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const VideoInfo = ({title, description, created_at, channelTitle, views, video}) => {

    return (
        <div className='videoinfo'>
            <div className='videoinfo__headline'>
                <h1>{title}</h1>
                {/* <LikeButtons {...props}  /> */}
            {/*  */}
                </div>
            

            <div className='videoinfo__stats'>
                <p>{views} views • {created_at.slice(0,10)}</p>
                
                <div className="likes">
                    <LikesContainer video={video}/>
                </div>
                
            </div>
            <hr />
            <div className="videoinfo__channel">
                {/* <div> */}
                        <FontAwesomeIcon icon={faUserCircle} className="user__cicle"/>
                    <div className='videoinfo__channelinfo'>
                        <h3 className='videoinfo__channeltitle'>{channelTitle}</h3>
                    </div>
                {/* </div> */}
               
            </div>
            <div className='videoinfo__channeldesc'>
                <p>{description}</p>
            </div>
            <hr/>
        </div>
    )
}

export default VideoInfo;