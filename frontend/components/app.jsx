import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserShowContainer from './user/user_show_container';
import SignupContainer from './session/signup_container';
import GreetingContainer from './session/greeting_container';
import SigninContainer from './session/signin_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import HeaderContainer from './hearder_container'
import Home from './home';
import SideBar from './sidebar/sidebar'
import RecommendedVideosContainer from './videos/recommended_videos_container'
import VideoShow from './videos/video_show'
import VideoShowContainer from './videos/video_show_container';

const App = () => (
    <div className="app">
       
        <HeaderContainer/>
        
        <div className='app__page'>
            <SideBar/> 
        
            <Switch>
            <Route exact path="/" component={RecommendedVideosContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer}/>
            <AuthRoute exact path="/signin" component={SigninContainer}/>
            <Route exact path="/videos/:videoId" component={VideoShowContainer}/>

        </Switch>
        </div>
    </div>
)
export default App 