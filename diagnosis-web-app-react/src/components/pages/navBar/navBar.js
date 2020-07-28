import React from 'react';
import {NavLink, withRouter } from 'react-router-dom';
import './navBar.css';


class Navbar extends React.Component {

    logout = () => {
        fetch('http://127.0.0.1:8000/users/logout/' + this.props.token)
            .then(localStorage.clear())
            .then(sessionStorage.clear())
    }

    showMenubar = () => {
        let isChecked = document.getElementById("check").checked;
        if (isChecked === true) {
            document.getElementById("menu").style.left = "0";
            document.getElementById("wrapper").style.display = "none";
        }
        else {
            document.getElementById("menu").style.left = "-100%";
            document.getElementById("wrapper").style.display = "block";
        }
    }

        render() {
        return (
            <nav>
                <input type="checkbox" id="check" onClick={ this.showMenubar } />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <div>
                    <a href="/">WebMed</a>
                    <ul id="menu">
                        <li><NavLink to="/" className="menuString">Home</NavLink></li>
                        <li><NavLink to="/quest" className="menuString">Interview</NavLink></li>
                        <li><NavLink to="/login" className="menuString">Login</NavLink></li>
                        <li><NavLink to="/register" className="menuString">Register</NavLink></li>
                        <li><NavLink to="/login" className="menuString" onClick={ this.logout }>Logout</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default withRouter(Navbar);
