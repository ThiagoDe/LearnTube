import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserShowContainer from './user/user_show_container';
import SignupContainer from './session/signup_container';
import GreetingContainer from './session/greeting_container';
import SigninContainer from './session/signin_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'

const App = () => (
    <div>
        <h1> LearnTube </h1>
        <GreetingContainer/>
        <Switch>
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <AuthRoute exact path="/signin" component={SigninContainer}/>

        </Switch>
    </div>
)
export default App 