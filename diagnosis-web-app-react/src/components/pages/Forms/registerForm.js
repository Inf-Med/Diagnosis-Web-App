import React from 'react';


class RegisterForm extends React.Component {

    state = {
        username: '',
        email: '',
        email2: '',
        password: '',
        usernameError: '',
        emailError: '',
        email2Error: '',
        passwordError: ''
}

    inputChanged = (event) => {
        const cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({cred});
    }

    usernameChanged = (event) => {
      this.setState({ username : event.target.value }, () =>{
        this.validateUsername();
      });
    };

     validateUsername = (e) =>{
          const{username} = this.state;
          this.setState({
            usernameError:
            username.length > 2 || username === '' ? null : 'Username must be longer than 2 characters'
          });
     }

     emailChanged = (event) => {
      this.setState({ email : event.target.value }, () =>{
        this.validateEmail();
      });
     };

     validateEmail = (e) =>{
          const{email} = this.state;
          this.setState({
            emailError:
            email.includes('@') && email.length > 2 ? null : 'Email is invalid'
          });
     }

     email2Changed = (event) => {
      this.setState({ email2 : event.target.value }, () =>{
        this.validateEmail2();
      });
     };

     validateEmail2 = (e) =>{
          const{email2} = this.state;
          const{email} = this.state;
          this.setState({
            email2Error:
            email2.includes('@') && email2.length > 2 && email === email2 ? null : 'Emails must match.'
          });
     }

     passwordChanged = (event) => {
      this.setState({ password : event.target.value }, () =>{
        this.validatePassword();
      });
     };

     validatePassword = (e) =>{
          const{password} = this.state;
          this.setState({
            passwordError:
            password.length >= 8 ? null : 'Password must contains at least 8 characters.'
          });
     }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendRegisterRequest(this.state);
        this.setState({
            username: '',
            email: '',
            email2: '',
            password: ''
        })
    }

    render() {
        return (
          <form id="register">
            <div>
                <div className="input-data">
                    <label><strong>Username:</strong></label>
                    <input type="text" name="username"
                        value={ this.state.username }
                        onChange={ this.usernameChanged }
                        className={`form-control ${this.state.usernameError ? 'is-invalid' : ''}`}
                        onBlur={this.validateUsername}
                        />
                </div>
                <div className='invalid-feedback'>{this.state.usernameError}</div>

                <div className="input-data">
                <label><strong>Email:</strong></label>
                    <input type="text" name="email"
                        value={ this.state.email }
                        onChange={ this.emailChanged }
                        className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
                        onBlur={this.validateEmail}
                        />
                </div>
                <div className='invalid-feedback'>{this.state.emailError}</div>

                <div className="input-data">
                <label><strong>Confirm Email:</strong></label>
                    <input type="text" name="email2"
                        value={ this.state.email2 }
                        onChange={ this.email2Changed }
                        className={`form-control ${this.state.email2Error ? 'is-invalid' : ''}`}
                        onBlur={this.validateEmail2}
                        />
                </div>
                <div className='invalid-feedback'>{this.state.email2Error}</div>

                <div className="input-data">
                <label><strong>Password:</strong></label>
                    <input type="password" name="password"
                        value={ this.state.password }
                        onChange={ this.passwordChanged }
                        className={`form-control ${this.state.passwordError ? 'is-invalid' : ''}`}
                        onBlur={this.validatePassword}
                        />
                </div>
                <div className='invalid-feedback'>{this.state.passwordError}</div>

                { this.state.username !==0 &&  this.state.email !==0 && this.state.email2 !==0 && this.state.password !==''
                && !this.state.usernameError && !this.state.emailError && !this.state.passwordError && !this.state.email2Error &&
                <button id="submitBtn" onClick={this.handleSubmit}>Register</button>
                }
            </div>
            </form>
        )
    }

}


export default RegisterForm;
