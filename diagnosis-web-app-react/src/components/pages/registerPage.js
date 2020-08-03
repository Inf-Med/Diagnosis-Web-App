import React from 'react';
import RegisterForm from './Forms/registerForm';
import {getCookie} from '../projectUtilities';
import { Redirect } from 'react-router-dom';


class RegisterPage extends React.Component {

    state = {
      shouldUserBeRedirected: false
    }

    register = (registerData) => {
      fetch('http://127.0.0.1:8000/users/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken'),
        },
        body: JSON.stringify(registerData)
      })
      .then( (data) => {
          if (data.status !== 201) this.props.editAlertMessageState(true, "Registration failed. Please try again.", "errorMessage");
          else {
            this.props.editAlertMessageState(true, "Your acount has been created. Now you are able to log in.", "successMessage");
            this.setState({shouldUserBeRedirected: true});
          }
          return data.json();
        })
      .catch( error => console.error(error))
    }

    render() {
      let maybeRedirect;
        if (this.state.shouldUserBeRedirected === false)
            maybeRedirect = <RegisterForm sendRegisterRequest={ this.register }/>
        else
            maybeRedirect = <Redirect to="/login"></Redirect>

      return (
          <div id="content">
              <div id="wrapper">
                { maybeRedirect }
              </div>
          </div>
      )
    }
}


export default RegisterPage;
