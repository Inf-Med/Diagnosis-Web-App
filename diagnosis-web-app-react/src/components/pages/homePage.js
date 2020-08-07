import React from 'react';
import { Link } from 'react-router-dom';
import './Forms/questionnaire.css'


class HomePage extends React.Component {

    render() {
        let interviewButton;

        if (this.props.isUserLoggedIn === true)
            interviewButton =
                <Link to="/quest">
                    <button id="interviewBtn" type="button">Let's get started</button>
                </Link>
        else
            interviewButton =
                <Link to="/login">
                    <button id="interviewBtn" type="button">Let's get started</button>
                </Link>

        return (
            <center>
                <form id="home" className="form-style-5">
                    <div id="content">
                        {/* <div id="wrapper"> */}
                            <h1>Welcome to WebMed!</h1>
                            <br />
                            <br />
                    <h2>Check your patient's symptoms and find out what could be causing them.</h2>
                    <br />
                    <br />
                    This tool is intended for doctors in order to help them with diagnosing severe conditions. 
                    WebMed provides a fast and accurate health assessment.
                    <br />
                    <br />
                    <h2>How to use WebMed?</h2>
                    It's simple, just follow these steps:
                    <br />
                    <br />
                    1. Register a patient
                    <br />
                    2. Answer the questions
                    <br />
                    3. Choose patient's symptoms
                    <br />
                    4. Read the diagnosis
                    <br />
                    <br />
                        {interviewButton}
                        </div>
                    {/* </div> */}
                </form>
            </center>

        )
    }
}


export default HomePage;
