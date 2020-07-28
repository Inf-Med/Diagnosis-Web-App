import React from 'react';
import RegisterForm from './Forms/registerForm';


class RegisterPage extends React.Component {

    register = (registerData) => {
      fetch('http://127.0.0.1:8000/users/register/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(registerData)
      })
      .then( data => data.json())
      .then(
        data => {
          console.log(data.token);
        }
      )
      .catch( error => console.error(error))
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <RegisterForm sendRegisterRequest={ this.register }/>
            </div>
        )
    }
}


export default RegisterPage;
