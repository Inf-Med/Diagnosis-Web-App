import React from 'react';
import {NavLink, withRouter } from 'react-router-dom';
import './navBar.css';
import AlertMessage from '../../alertMessage/alertMessage';
import {getCookie} from '../../projectUtilities';


class Navbar extends React.Component {

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

    logout = () => {
        fetch('http://127.0.0.1:8000/users/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            body: JSON.stringify(this.props.token)
        })
        .then( (data) => {
            console.log(data.status)
            if (data.status !== 200) this.setState({
                showPopupMessage: true,
                message: "Logout failed. Please try again.",
                messageClass: "errorMessage"
              });
              else this.setState({
                showPopupMessage: true,
                message: "Logout successfull.",
                messageClass: "successMessage"
              });
            })
        .then(localStorage.clear())
        .then(sessionStorage.clear())
        .then( () => {this.props.changeUserState()})
        .catch( error => console.error(error))

    }

    showMenubar = () => {
        let isChecked = document.getElementById("check").checked;
        if (isChecked === true) {
            document.getElementById("menu").style.left = "0";
            document.getElementById("content").style.display = "none";
        }
        else {
            document.getElementById("menu").style.left = "-100%";
            document.getElementById("content").style.display = "block";
        }
    }

        render() {
            let alertMessage;
            if (this.state.showPopupMessage === true) alertMessage =
                <AlertMessage
                    message={ this.state.message }
                    messageClass={ this.state.messageClass }
                    clearParentState={ this.clearState }
                />

            let suitedNavbarElements;
            if (this.props.isUserLoggedIn === true)
                suitedNavbarElements =
                    <ul id="menu">
                        <li><NavLink to="/" className="menuString">Home</NavLink></li>
                        <li><NavLink to="/quest" className="menuString">Interview</NavLink></li>
                        <li><NavLink to="/login" className="menuString" onClick={ this.logout }>Logout</NavLink></li>
                    </ul>
            else
                suitedNavbarElements =
                    <ul id="menu">
                        <li><NavLink to="/" className="menuString">Home</NavLink></li>
                        <li><NavLink to="/login" className="menuString">Login</NavLink></li>
                        <li><NavLink to="/register" className="menuString">Register</NavLink></li>
                    </ul>

            return (
                <div>
                    <nav>
                        <input type="checkbox" id="check" onClick={ this.showMenubar } />
                        <label htmlFor="check" className="checkbtn">
                            <i className="fas fa-bars"></i>
                        </label>
                        <div>
                            <a href="/">WebMed</a>
                            { suitedNavbarElements }
                        </div>
                    </nav>
                    <div id="content">
                        { alertMessage }
                    </div>
                </div>
            )
    }
}


export default withRouter(Navbar);
