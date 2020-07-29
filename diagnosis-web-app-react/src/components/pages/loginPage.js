import React from 'react';
import LoginForm from './Forms/loginForm';
import AlertMessage from '../alertMessage/alertMessage';
import {getCookie} from '../projectUtilities';


class LoginPage extends React.Component {

    state = {
      showPopupMessage: false,
      message: "",
      messageClass: "",
    }

    clearState = () => {
      this.setState({
        showPopupMessage: false,
        message: "",
        messageClass: "",
      })
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
          if (data.status !== 200) this.setState({
            showPopupMessage: true,
            message: "Login failed. Please try again.",
            messageClass: "errorMessage"
          });
          else this.setState({
            showPopupMessage: true,
            message: "Login successfull.",
            messageClass: "successMessage"
          });
          return data.json();
        })
        .then(
          data => {
            this.props.setLoginSessionToken(data.token);
            localStorage.setItem('token', data.token);
            sessionStorage.setItem('token', data.token);
          }
        )
        .then( () => this.props.changeUserState())
        .catch( error => console.error(error))
    }

    render() {

        let alertMessage;
        if (this.state.showPopupMessage === true) alertMessage =
          <AlertMessage message={ this.state.message } messageClass={ this.state.messageClass } clearParentState={ this.clearState } />
        return (
            <div id="content">
                { alertMessage }
                <div id="wrapper">
                  <LoginForm sendLoginRequest={ this.login }/>
                </div>
            </div>
        )
    }
}


export default LoginPage;
