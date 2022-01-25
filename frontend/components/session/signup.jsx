import React from "react"

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
            
            <div class="box">
                <h2>Sign Up</h2>
                <br/>

                 <form>
                    <div class="inputBox">
                            <input type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')} />
                            <label>Username</label>
                    </div>

                    <div class="inputBox">
                            <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
                            <label>Password </label>
                    </div>

                    <button type="submit" onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}
export default Signup 