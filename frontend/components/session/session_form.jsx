import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
     
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        
        return (
    <div>
        {/* <h2>test sign in form </h2> */}
        <h1>{this.props.formType}</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={this.state.username}
                        placeholder= "Username"
                        onChange={this.update("username")}>
                    </input>
                </label>
              
                <label>
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder= "Password"
                        onChange={this.update("password")}>
                    </input>
                </label>
                
                    <button type="submit">{this.props.formType}</button>
            </form>
     </div>
     )
    }

}
export default SessionForm;