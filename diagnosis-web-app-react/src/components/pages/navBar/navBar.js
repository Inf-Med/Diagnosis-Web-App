import React from 'react';
import {NavLink, withRouter } from 'react-router-dom';
import './navBar.css';
import AlertMessage from '../../alertMessage/alertMessage';
import {getCookie} from '../../projectUtilities';


class Navbar extends React.Component {

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
            if (data.status !== 200) this.props.editAlertMessageState(true, "Logout failed. Please try again.", "errorMessage");
            else {
                this.props.editAlertMessageState(true, "Logout successfull.", "successMessage");
                this.props.changeUserState();
            }
        })
        .then(localStorage.clear())
        .then(sessionStorage.clear())
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
                </div>
            )
    }
}


export default withRouter(Navbar);
