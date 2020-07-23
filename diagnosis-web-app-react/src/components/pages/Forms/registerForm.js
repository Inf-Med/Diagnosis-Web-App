import React from 'react';


class RegisterForm extends React.Component {

    state = {
        username: '',
        email: '',
        email2: '',
        password: ''
}

    inputChanged = (event) => {
        const cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({cred});
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
                    Confirm Email:
                    <input type="text" name="email2"
                        value={ this.state.email2 }
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

                <button onClick={ this.handleSubmit }>Register</button>
            </form>
        )
    }

}


export default RegisterForm;
