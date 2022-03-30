import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from './session/greeting_container'
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions'

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
      // console.log(this.state, 'this state')
      // console.log('handle search')
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
            {/* className="search-container" */}
            <form onSubmit={this.handleSearch} > 
              <input className="header__searchbutton" type='text' placeholder=" Search and Learn" 
                  value={this.state.searchquery} 
                  onChange={this.update}
              />
                  <button className="search-button" type="submit">
                    <img className='header__search__icon'
                      src={window.search}
                      alt=''
                    />
                  </button>
              </form>
              
          </div>

          <div className="header__right">
            
            { prevStatus }
          

          </div>
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {

    return ({
        videos: Object.values(state.entities.videos),
        currentUser: state.entities.users[state.session.id]
      
    })
}

const mDTP = (dispatch) => {
    return {
       logout: () => dispatch(logout()),
    }
}
export default withRouter(connect(mapStateToProps, mDTP)(Header));