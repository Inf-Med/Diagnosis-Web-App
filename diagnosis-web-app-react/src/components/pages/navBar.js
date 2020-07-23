import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


const Navbar = (props) => {
    return (
        <nav id="navBar" className="nav-wrapper darken-3">
            <div className="container">
                <a href="" className="brand-logo">Diagnosis app</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/interview">Interview</NavLink></li>
                    <li><NavLink to="/login">login</NavLink></li>
                    <li><NavLink to="/register">register</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}


export default withRouter(Navbar);
