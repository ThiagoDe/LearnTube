import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/video_actions';
import VideoCard from './videos/video_card';
// import NavBar from './navbar';
// import SideMenu from './side_menu';

class SearchedVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: ''
        }

        this.filterVideo = this.filterVideo.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos().then(()=> this.filterVideo());
    }

    componentDidUpdate(prevProp) {
        if (prevProp.match.params.searchQuery !== this.props.match.params.searchQuery) {
            this.filterVideo();
            // console.log(this.state, 'videos state')
        }
    }

    filterVideo(){
        let filteredVideos;
        if (this.props.match.params.searchQuery.length >= 1) {
            filteredVideos = this.props.videos.filter(video => {
                return video.title.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) ||
                    video.description.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) ||
                    video.user.username.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase())
            })
        }
        this.setState({ videos: filteredVideos })
    }

    render() {
        console.log(typeof this.state.videos.length, 'videos array')
        const channles = ['MasterYoda', 'Dumbledore', 'Einstein', 'Master Splinter', 'Hermione', 'Betty Boop', 'Luke Skywalker', 'Issac Newton', 'Lisa Simpson']
        if (this.state.videos.length === 0) return null
            console.log('HERE')
            return (
               <div className='recommendedVideos'>
                 <div className='recommendedVideos__videos'>
                     {
                    this.state.videos.map(video => (
                        
                        //    { view = Math.floor((Math.random() * 20) + 57)}
                        <Link key={video.id} to={`/videos/${video.id}`} className='link__video'>
                            <VideoCard
                                
                                image={video.thumbnail}
                                title={video.title}
                                views={`${Math.floor((Math.random() * 40) + 7)}k`}
                                channel={`${channles.shift()} ✓`}
                                channelImage={window.profilePic}
                                key={video.id}
                                timestamp={video.created_at}
                            />
                         </Link>
                    ))
                }
                    </div>
                </div>
            )
    }

}

const mapStateToProps = (state, ownProps) => {
    // console.log(state.entities.videos, 'searched state')
    return ({
        videos: Object.values(state.entities.videos),
        // errors: state.errors.videos,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchVideos: () => dispatch(fetchVideos()),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchedVideos));
