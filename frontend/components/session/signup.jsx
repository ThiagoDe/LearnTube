import React from "react"
import { Link } from 'react-router-dom';
class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        
    handleInput(type){
        return e => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createNewUser(this.state)
            // .then( () => this.props.history.push('/comments'))
    }

    render() {
        return (
            
            <div className="box">
                <h2>Sign Up</h2>
                <br/>

                 <form>
                    <div className="inputBox">
                            <input type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')} />
                            <label>Username</label>
                    </div>

                    <div className="inputBox">
                            <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
                            <label>Password </label>
                    </div>
                    <Link to='/signin' >
                        <p>Already have an account?</p>
                    </Link>

                    <button type="submit" onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}
export default Signup 