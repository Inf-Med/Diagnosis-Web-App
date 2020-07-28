import React from 'react';
import './forms.css'


class LoginForm extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
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
            <div id="wrapper">
                <div className="input-data">
                  <label><strong>Username:</strong></label>
                    <input type="text" name="username"
                        value={ this.state.username }
                        onChange={ this.inputChanged }
                        />
                </div>
                <div className="input-data">
                    <label><strong>Email:</strong></label>
                    <input type="text" name="email"
                        value={ this.state.email }
                        onChange={ this.inputChanged }
                        />
                </div>
                <div className="input-data">
                <label><strong>Password:</strong></label>
                    <input type="password" name="password"
                        value={ this.state.password }
                        onChange={ this.inputChanged }
                        />
               </div>
                { this.state.username !==0 &&  this.state.email !==0 && this.state.password !=='' &&
                    <button id="submitBtn" onClick={this.handleSubmit}>Login</button>
                }
            </div>
        )
    }

}


export default LoginForm;
