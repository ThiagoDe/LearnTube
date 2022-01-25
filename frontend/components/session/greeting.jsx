import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
          {/* <h1>with currentUser test greetings </h1> */}
        <p>Welcome, {currentUser.username} !</p>
        <button onClick={ logout }>Sign out</button>
      </div>
    );
  }

  return (
    <div>
        <h1></h1>
      <Link to='/signup'>Sign Up</Link>
      <br/>
      <Link to={'/signin'}>Sign In</Link>
    </div>
  );
};

export default Greeting;
