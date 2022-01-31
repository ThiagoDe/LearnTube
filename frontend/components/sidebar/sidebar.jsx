import React from 'react';
import SideBarRow from './sidebar_row';


const SideBar = () => {

    return (
        
            <div className='sidebar' >
               <div >
                <SideBarRow selected icon={ window.home} title='Home' />
                <SideBarRow icon={window.linkedin} title='Linkedin' />
                {/* <hr /> */}
                <SideBarRow icon={window.git} title='GitHub' />
              
              
                {/* <SideBarRow Icon={HistoryIcon} title='History' /> */}
                {/* <SideBarRow Icon={OndemandVideoIcon} title='Your videos' /> */}
                {/* <SideBarRow Icon={ThumbUpIcon} title='Liked vides' />  */}
                <hr />
                
                </div>

            </div>
        
    )
}

export default SideBar;