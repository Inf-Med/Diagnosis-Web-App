import React from 'react';
import QuestForm from './Forms/questForm';
import {getCookie} from '../projectUtilities';
import { Redirect } from 'react-router-dom';


class QuestPage extends React.Component {

    quest = (questData) => {
        questData.user_id = this.props.userId;
        fetch('http://127.0.0.1:8000/quest/quest/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(questData)
        })
        .then( data => {
          data.json();
          this.props.submitstatus()
        })
        .catch( error => console.error(error))
    }

    render() {
      let quest;
        if (this.props.isUserLoggedIn === true)
          if(this.props.isSubmit === false)  
            quest = <QuestForm sendQuestRequest={ this.quest }/>
          else
            quest = <Redirect to="/interview"></Redirect>
        else
            quest = <Redirect to="/login"></Redirect>

        return (
            <div id="content">
                <div id="wrapper">
                  { quest }
                </div>
            </div>
        )
    }
}


export default QuestPage;
