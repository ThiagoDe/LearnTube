import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './session/greeting_container'


class Header extends React.Component {

  handleToggle() {
   const button = document.querySelector('.sidebar')
    button.classList.toggle('active')
  }

    render() {
    return (

        <div className='header'>
          <div className="header__left">

            <button type="button" className="button_icon_burger" 
                onClick={ this.handleToggle}>
              <img className='header__hamburger'
                src={window.hamburger}
                alt=''
              />
            </button>

            <Link to='/'> 
              <img className='header__logo'
                src={ window.logoURL}
                alt=''
              />
            </Link>
           
          </div>
          
          <div className="header__center">
            <input className="header__searchbutton" type='text' placeholder="Search and Learn" />
              <img className='header__search__icon'
                src={window.search}
                alt=''
              />
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
}

export default Header;