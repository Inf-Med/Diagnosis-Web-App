import React from 'react';
import HomeForm from './Forms/homeForm';
import { Link, Redirect } from 'react-router-dom';


class HomePage extends React.Component {

    render() {
        let interviewButton;
        if (this.props.isUserLoggedIn === true)
            interviewButton =
                <Link to="/quest">
                    <button id="interviewBtn" type="button">Start interview</button>
                </Link>
        else
            interviewButton =
                <Link to="/login">
                    <button id="interviewBtn" type="button">Start interview</button>
                </Link>

        return (
            <div id="content">
                <div id="wrapper">
                    Welcome to the home page!
                    <br/>
                    { interviewButton }
                </div>
            </div>
        )
    }
}


export default HomePage;
