import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserIconButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        };
        this.toggle = this.toggle.bind(this);
        this.display = this.display.bind(this);
    }

    toggle() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    display(logout, currentUser) {
        return <div className="user-icon-dropdown-content">
                <div className="user-display">
                    {currentUser.profile_image_url ? <img
                        className="user-icon-bigger"
                        src={currentUser.profile_image_url}>
                    </img> : <FontAwesomeIcon
                            className="dropdown-no-user-icon"
                            icon={['fa', 'user-circle']}
                    />}
                    <div className="user-info">
                        <h3>{currentUser.first_name + " " + currentUser.last_name}</h3>
                        <p>{currentUser.email}</p>
                        <a><p>Manage your Joojle Account</p></a>
                    </div>
                </div>
                <div className="user-icon-dropdown-content-links" onClick={logout}>
                    <FontAwesomeIcon
                        className="hamburger link-icon"
                        icon={['fa', 'external-link-alt']} />
                    <p>Sign out</p>
                </div>
            </div>
    }

    render() {
        const { logout, currentUser } = this.props;
        console.log(currentUser)
        return <button className="user-icon-container"> 
            {/* <div className="user-icon-dropdown" onClick={this.toggle}>
                {currentUser.profile_image_url ? <img
                    className="user-icon"
                    src={currentUser.profile_image_url}>
                </img> : <FontAwesomeIcon className="dropdown-no-user-icon" icon={['fa', 'user-circle']} />}
                {!this.state.hidden ? this.display(logout, currentUser) : ""}
            </div> */}
        </button>
    }
}

export default UserIconButton;