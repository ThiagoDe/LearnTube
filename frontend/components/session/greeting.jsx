import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div className="greeting__box">
          
        {/* <p>username {currentUser.username} !</p>
        <button className="logout__button" type="submit" onClick={ logout }>Sign out</button> */}
          <div className="navigation">
          
          <a id='av' className="button" type="submit"  onClick={ logout }>
            <img id="img" src={window.profilePic}/>
            <div className="logout">LOGOUT</div>
          </a>
        </div>
      </div>

      
    );
  }

  return (
    <div  className="inputBox">
       
    </div>
  );
};

export default Greeting;
