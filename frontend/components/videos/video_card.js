import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videoCard">
            <img className='videoCard__image' src={image} alt=""/>
            <div className="videoCard__info">
              
                <FontAwesomeIcon icon={faUserCircle} className="vii-no-user-icon"/>
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} views • {timestamp.slice(0,10)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
