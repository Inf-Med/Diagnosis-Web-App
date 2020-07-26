import React from 'react';
import LoginForm from './Forms/loginForm';
import {getCookie} from '../utilities';


class LoginPage extends React.Component {

    login = (loginData) => {
        fetch('http://127.0.0.1:8000/users/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(loginData)
        })
        .then( data => data.json())
        .then(
          data => {
            this.props.setLoginSessionToken(data.token);
            localStorage.setItem('token', data.token);
            sessionStorage.setItem('token', data.token);
          }
        )
        .catch( error => console.error(error))
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <LoginForm sendLoginRequest={ this.login }/>
            </div>
        )
    }
}


export default LoginPage;
