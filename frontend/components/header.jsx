import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
// import learnLogo from '../../app/assets/images/learn_logo'

function Header () {
    return (
        <div className='header'>
          <div className="header__left">
            <MenuIcon />
            <Link to='/'> 
                {/* <span className='header__logo' ></span> */}
              {/* <img className='header__logo'
                src={learnLogo}
                alt=''
              /> */}
            </Link>
          </div>
          
          <div className="header__center">
            <input type='text'/>
            <SearchIcon className='header__searchbutton'/>
          </div>

          <div className="header__right">
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>

            <Link to='/'>
                <Avatar
                alt='Nouman Ahmed'
                src='https://avatars1.githubusercontent.com/u/35970677?s=60&v=4'
                />
            </Link>

          </div>
        </div>
    )
}

export default Header;