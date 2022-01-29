import React from 'react';
import SideBarRow from './sidebar_row';
// import HomeIcon from '@material-ui/icons/Home';
// import WhatshotIcon from '@material-ui/icons/Whatshot';
// import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
// import HistoryIcon from '@material-ui/icons/History';
// import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SideBar = () => {

    return (
        
            <div className='sidebar'>
               
                <SideBarRow selected icon={ window.home} title='Home' />
                {/* <SideBarRow selected title='Home' /> */}
                <SideBarRow icon={window.linkedin} title='Linkedin' />
                <hr />
                <SideBarRow icon={window.git} title='GitHub' />
              
              
                {/* <SideBarRow Icon={HistoryIcon} title='History' /> */}
                {/* <SideBarRow Icon={OndemandVideoIcon} title='Your videos' /> */}
                {/* <SideBarRow Icon={ThumbUpIcon} title='Liked vides' />  */}
                <hr />
                
                

            </div>
        
    )
}

export default SideBar;