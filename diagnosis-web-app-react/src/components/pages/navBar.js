import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './navBar.css';


class Navbar extends React.Component {

    logout = () => {
        fetch('http://127.0.0.1:8000/users/logout/' + this.props.token)
            .then(localStorage.clear())
            .then(sessionStorage.clear())
    }

    render() {
        return (
            <nav id="navBar" className="nav-wrapper darken-3">
                <div className="container">
                    <a id="logo" href="/" className="brand-logo">Diagnosis app</a>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/quest">Interview</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li id="logoutString" onClick={ this.logout }>Logout</li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default withRouter(Navbar);
