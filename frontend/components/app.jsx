import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserShowContainer from './user/user_show_container';
import SignupContainer from './session/signup_container';
import GreetingContainer from './session/greeting_container';
import SigninContainer from './session/signin_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import Header from './header'
import Home from './home';

const App = () => (
    <div>
       
        <Header/>
        
        <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <AuthRoute exact path="/signin" component={SigninContainer}/>

        </Switch>
    </div>
)
export default App 