import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './session/greeting_container'
// import UserIconButtonContainer from "./user/user_icon_button_container";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchquery: ''
        };

        this.update = this.update.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

  update(e) {
      // console.log(this.state, 'this state')
        this.setState({ searchquery: e.currentTarget.value });
    }

  handleToggle() {
   const button = document.querySelector('.sidebar')
    button.classList.toggle('active')
    }

  handleSearch(e) {
        e.preventDefault();

        if (this.state.searchquery.length > 0) {
            this.props.history.push({
                pathname: `/search/${this.state.searchquery}`
            })
        }
    }  

    render() {
      let prevStatus
      if (this.props.currentUser) {
        prevStatus = <GreetingContainer className='header__icon'/>
      } else {
        prevStatus = <Link to='/signin'>
               <img className='header__signin'
                alt=''
                src={window.signinButton}
               />
            </Link>
      }

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
            <form className="search-container" onSubmit={this.handleSearch} ></form>
              <input className="header__searchbutton" type='text' placeholder="Search and Learn" 
                  value={this.state.searchquery} 
                  onChange={this.update}
                  />
                <img className='header__search__icon'
                  src={window.search}
                  alt=''
              />
              <form/>
          </div>

          <div className="header__right">
            
            { prevStatus }
          

          </div>
        </div>
    )
    }
}

export default Header;