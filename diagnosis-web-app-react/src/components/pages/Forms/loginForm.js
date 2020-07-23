import React from 'react';


class LoginForm extends React.Component {

    state = {
        username: '',
        email: '',
        password: ''
    }

    inputChanged = (event) => {
        const cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({cred});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendLoginRequest(this.state);
        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <form id="login">
                <label>
                    Username:
                    <input type="text" name="username"
                        value={ this.state.username }
                        onChange={ this.inputChanged }
                        />
                </label>
                <br/>

                <label>
                    Email:
                    <input type="text" name="email"
                        value={ this.state.email }
                        onChange={ this.inputChanged }
                        />
                </label>
                <br/>

                <label>
                    Password:
                    <input type="password" name="password"
                        value={ this.state.password }
                        onChange={ this.inputChanged }
                        />
                </label>
                <br/>

                <button onClick={ this.handleSubmit }>Login</button>
            </form>
        )
    }

}


export default LoginForm;
