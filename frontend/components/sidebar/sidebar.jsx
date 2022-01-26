import React from 'react';
import SideBarRow from './sidebar_row';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const SideBar = () => {
    return (
        <div className='sidebar' id='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title='Home' />
            <SideBarRow Icon={WhatshotIcon} title='Trending' />
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription' />
            {/* this can be where */}
            <hr />
            {/* switch a linkdin link */}
            <SideBarRow Icon={HistoryIcon} title='History' />
            <SideBarRow Icon={OndemandVideoIcon} title='Your videos' />
            <SideBarRow Icon={ThumbUpIcon} title='Liked vides' />
            <hr />
        </div>
    )
}

export default SideBar;