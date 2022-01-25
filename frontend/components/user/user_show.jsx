import React from 'react';
import { Link } from 'react-router-dom'

class UserShow extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.user
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId).then(() => {
            this.props.fetchVideos()})
    }

    render() {
        return (
            <div>
                <h1>User show </h1>
                {/* <h2>{this.props.user.username}</h2> */}
                 <Link to='/'></Link>
            </div>
        )
    }

}
export default UserShow 