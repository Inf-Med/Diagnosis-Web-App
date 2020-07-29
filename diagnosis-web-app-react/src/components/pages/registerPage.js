import React from 'react';
import RegisterForm from './Forms/registerForm';
import AlertMessage from '../alertMessage/alertMessage';
import {getCookie} from '../projectUtilities';


class RegisterPage extends React.Component {

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
        //console.log(data.status)
          if (data.status !== 201) this.setState({
            showPopupMessage: true,
            message: "Registration failed. Please try again.",
            messageClass: "errorMessage"
          });
          else this.setState({
            showPopupMessage: true,
            message: "Registration successfull.",
            messageClass: "successMessage"
          });
          return data.json();
        })
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
                  <RegisterForm sendRegisterRequest={ this.register }/>
                </div>
            </div>
        )
    }
}


export default RegisterPage;
