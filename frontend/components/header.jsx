import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header () {
    return (
        <div className='header'>
          <div className="header__left">
            <MenuIcon />
            <Link to='/'> 
              <img className='header__logo'
                src={ window.logoURL}
                alt=''
              />
            </Link>
          </div>
          
          <div className="header__center">
            <input type='text'/>
            <SearchIcon className='header__searchbutton'/>
          </div>

          <div className="header__right">
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            {/* <NotificationsIcon className='header__icon'/> */}
           
            <Link to='/signin'>
               <img className='header__signin'
                alt=''
                src={window.signinButton}
               />
            </Link>

            <Link to='/'>
                <Avatar
                alt='Thiago'
                src={window.profilePic}
                />
            </Link>

          </div>
        </div>
    )
}

export default Header;