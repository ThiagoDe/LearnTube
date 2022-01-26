import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
          {/* <h1>with currentUser test greetings </h1> */}
        <p>Welcome, {currentUser.username} !</p>
        <button type="submit" onClick={ logout }>Sign out</button>
      </div>
    );
  }

  return (
    <div  className="inputBox">
        {/* <h1></h1>
      <Link to='/signup'>
        <button type="submit" >Sign Up</button>
      </Link>
      <br/>
      <br/>
      <br/>
      <Link to={'/signin'}>
        <button type="submit" >Sign In</button>
      </Link> */}
    </div>
  );
};

export default Greeting;
