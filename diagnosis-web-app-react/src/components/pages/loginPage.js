import React from 'react';
import LoginForm from './Forms/loginForm';
import {getCookie} from '../projectUtilities';
import { Redirect } from 'react-router-dom';


class LoginPage extends React.Component {

    state = {
      endpointToRedirect: ""
    }

    login = (loginData) => {
        fetch('http://127.0.0.1:8000/users/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(loginData)
        })
        .then( (data) => {
          if (data.status !== 200) this.props.editAlertMessageState(true, "Login failed. Please, try again.", "errorMessage");
          else {
            this.props.editAlertMessageState(true, "Login successfull.", "successMessage");
            this.props.changeUserState();
          }
          return data.json();
        })
        .then(
          data => {
            this.props.setLoginSessionTokenAndUsername(data.token, data.username);
            localStorage.setItem('token', data.token);
            sessionStorage.setItem('token', data.token);
          }
        )
        .catch( error => console.error(error))
    }

    render() {
        let maybeRedirect;
        if (this.props.isUserLoggedIn === false)
            maybeRedirect = <LoginForm sendLoginRequest={ this.login }/>
        else
            maybeRedirect = <Redirect to="/"></Redirect>

        return (
            <div id="content">
                <div id="wrapper">
                  { maybeRedirect }
                </div>
            </div>
        )
    }
}


export default LoginPage;
