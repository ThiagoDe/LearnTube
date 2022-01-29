import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './session/greeting_container'
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

// import Avatar from '@material-ui/core/Avatar';
// import FileUploadIcon from '@mui/icons-material/FileUpload';

function Header () {
    return (
        <div className='header'>
          <div className="header__left">

            {/* <MenuIcon className='hamburger__menu'/> */}
 
            <Link to='/'> 
              <img className='header__hamburger'
                src={window.hamburger}
                alt=''
              />
            </Link> 

            <Link to='/'> 
              <img className='header__logo'
                src={ window.logoURL}
                alt=''
              />
            </Link>
           
          </div>
          
          <div className="header__center">
            <input type='text' placeholder="Search and Learn"/>
            {/* <SearchIcon className='header__searchbutton'/> */}
          </div>

          <div className="header__right">
            {/* <FileUploadIcon className='header__icon'/> */}
            
            {/* change the greeting to the modal */}
             <GreetingContainer className='header__icon'/>
           
            <Link to='/signin'>
               <img className='header__signin'
                alt=''
                src={window.signinButton}
               />
            </Link>

            <Link to='/'>
                {/* <Avatar
                alt='Thiago'
                src={window.profilePic}
                /> */}
            </Link> 

          </div>
        </div>
    )
}

export default Header;