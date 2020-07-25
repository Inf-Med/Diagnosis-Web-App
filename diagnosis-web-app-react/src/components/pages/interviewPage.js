import React from 'react';
import InterviewForm from './Forms/interviewForm';
import {getCookie} from '../utilities';


class InterviewPage extends React.Component {

    interview = (interviewData) => {
        fetch('http://127.0.0.1:8000/quest/quest2/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(interviewData)
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
                <InterviewForm sendInterviewRequest={ this.interview }/>
            </div>
        )
    }
}


export default InterviewPage;
