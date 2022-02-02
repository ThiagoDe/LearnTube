import React from 'react';
import SideBarRow from './sidebar_row';
import { Link } from 'react-router-dom';


const SideBar = () => {

    return (
        
            <div className='sidebar' >
               <div >
                 <Link to='/'><SideBarRow selected icon={ window.home} title='Home' /></Link>

                <a href="https://www.linkedin.com/in/thiago-miglioranzi/" target="_blank"><SideBarRow icon={window.linkedin} title='Linkedin' /></a>
                {/* <hr /> */}
                <a href="https://github.com/ThiagoDe"  target="_blank"><SideBarRow icon={window.git} title='GitHub' /></a>
              
              
                {/* <SideBarRow Icon={HistoryIcon} title='History' /> */}
                {/* <SideBarRow Icon={OndemandVideoIcon} title='Your videos' /> */}
                {/* <SideBarRow Icon={ThumbUpIcon} title='Liked vides' />  */}
                <hr />
                
                </div>

            </div>
        
    )
}

export default SideBar;