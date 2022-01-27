import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserShowContainer from './user/user_show_container';
import SignupContainer from './session/signup_container';
import GreetingContainer from './session/greeting_container';
import SigninContainer from './session/signin_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import Header from './header'
import Home from './home';
import SideBar from './sidebar/sidebar'
import RecommendedVideos from './videos/recommended_videos'
// import VideoShow from './videos/video_show'
import VideoShowContainer from './videos/video_show_container';

const App = () => (
    <div className="app">
       
        <Header/>
        <div className='app__page'>
            <SideBar/> 
            <RecommendedVideos/>
            {/* <VideoShow/> */}
        </div>

        <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <AuthRoute exact path="/signin" component={SigninContainer}/>
        <AuthRoute exact path="/videos/:videoId" component={VideoShowContainer}/>

        </Switch>
    </div>
)
export default App 