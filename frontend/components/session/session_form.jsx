import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
     
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(Object.assign({}, this.state))
            .fail(() => this.setState({errors: this.props.errors}))
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        
        let errors = this.state.errors.map((el, idx) => {
            return <li key={idx} className="error">{el}</li>
        })
        // debugger
        return (
                    
            <div className="box">
                
                <h2>{this.props.formType}</h2>
                <p>Use your Google Account</p>


                    <form onSubmit={this.handleSubmit}>
                        <div className="inputBox">
                           
                                <input
                                    type="text"
                                    name="email"
                                    value={this.state.username}
                                    onChange={this.update("username")}>
                                </input>
                          <label>Username</label>
                        </div>

                        <div className="inputBox">
                                <input
                                    type="password"
                                    name="text"
                                    value={this.state.password}
                                    onChange={this.update("password")}>
                                </input>
                            <label> Password </label>
                        </div>
                            {errors}

                        <Link to='/signup' >
                        <p>Create an account</p>
                        </Link>
                        
                            <button type="submit">{this.props.formType}</button>
                    </form>
            </div>
     )
    }

}
export default SessionForm;