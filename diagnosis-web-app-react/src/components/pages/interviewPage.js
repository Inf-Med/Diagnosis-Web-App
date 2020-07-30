import React from 'react';
import InterviewForm from './Forms/interviewForm';
import { Redirect } from 'react-router-dom';


class InterviewPage extends React.Component {

    interview = (interviewData) => {
        fetch('http://127.0.0.1:8000/quest/quest2/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(interviewData)
        })
        .then( data => data.json())
        .catch( error => console.error(error))
    }

    render() {
        let interview;
        if (this.props.isUserLoggedIn === true)
            interview = <InterviewForm sendInterviewRequest={ this.interview }/>
        else
            interview = <Redirect to="/login"></Redirect>
        return (
            <div id="content">
                <div id="wrapper">
                   { interview }
                </div>
            </div>
        )
    }
}


export default InterviewPage;
