import React from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import {getCookie} from './components/projectUtilities';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import QuestPage from './components/pages/questPage';
import InterviewPage from './components/pages/interviewPage';
import HomePage from './components/pages/homePage';
import DiagnosisPage from './components/pages/diagnosisPage';
import PatientPage from './components/pages/patientPage';
import Navbar from './components/pages/navBar/navBar';
import AlertMessage from './components/alertMessage/alertMessage';


class App extends React.Component {

  state = {
    userId: "",
    token: "",
    username: "",
    isUserLoggedIn: false,
    isSubmit:false,
    isEnd:false,
    message: {
      showPopupMessage: false,
      text: "",
      messageClass: ""
    },

    diagnosisData: [],
    patients: []
  }

  componentDidMount = () => {
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      this.sendSessionEndingRequest();
      event.returnValue = '';
    })
  }

  clearAlertMessageState = () => {
    this.setState({message: {
      showPopupMessage: false,
      text: "",
      messageClass: "",
    }})
  }

  editAlertMessageState = (showMessage, messageText, className) => {
    this.setState({message: {
        showPopupMessage: showMessage,
        text: messageText,
        messageClass: className,
    }})
  }

  changeIsUserLoggedInState = () => {
    //console.log(this.state.isUserLoggedIn);
    let isLoggedIn = !this.state.isUserLoggedIn;
    this.setState({isUserLoggedIn: isLoggedIn});
  }
  submitData = () => {
    var doSubmit = true;
    this.setState({isSubmit: doSubmit});
  }
  endInterview = () => {
    var endStatus = true;
    this.setState({isEnd: endStatus});
  }
  resetStatus = () =>{
    var endStatus = false;
    var doSubmit = false;
    this.setState({
      isEnd: endStatus,
      isSubmit: doSubmit});
  } 
  setLoginSessionTokenAndUsername = (token, username, userId) => {
    this.setState({token, username, userId});
  }

  editDiagnosisDataState = (diagnosisData) => {
    this.setState({diagnosisData});
  }

  sendSessionEndingRequest = () => {
    fetch('http://127.0.0.1:8000/users/logout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
        },
        body: JSON.stringify(localStorage.token)
    })
  }

  render() {
    let alertMessage;
    if (this.state.message.showPopupMessage === true)
      alertMessage = <AlertMessage message={ this.state.message.text } messageClass={ this.state.message.messageClass } clearParentState={ this.clearAlertMessageState } />

    return (
          <div className="App">
                <BrowserRouter>
                    <Navbar
                      token={ this.state.token }
                      username={ this.state.username }
                      isUserLoggedIn={ this.state.isUserLoggedIn }
                      changeUserState={ this.changeIsUserLoggedInState }
                      editAlertMessageState={ this.editAlertMessageState }
                      resetStatus={this.resetStatus} 
                    />
                    { alertMessage }
                    <Route path="/login" render={ () => (
                      <LoginPage
                        setLoginSessionTokenAndUsername={ this.setLoginSessionTokenAndUsername }
                        changeUserState={ this.changeIsUserLoggedInState }
                        isUserLoggedIn={ this.state.isUserLoggedIn }
                        editAlertMessageState={ this.editAlertMessageState }
                      />
                      )}
                    />
                    <Route path="/register" render={ () => (
                      <RegisterPage
                        isUserLoggedIn={ this.state.isUserLoggedIn }
                        editAlertMessageState={ this.editAlertMessageState }
                      />
                      )}
                    />
                    <Route path="/quest" render={ () => (
                      <QuestPage
                        isUserLoggedIn={ this.state.isUserLoggedIn }
                        userId={ this.state.userId }
                        isSubmit={this.state.isSubmit}
                        submitstatus={this.submitData}
                      />
                      )}
                    />
                    <Route path="/interview" render={ () => (
                      <InterviewPage
                        isUserLoggedIn={ this.state.isUserLoggedIn }
                        editDiagnosisDataState={ this.editDiagnosisDataState }
                        userId={ this.state.userId }
                        isEnd={this.state.isEnd}
                        endStatus={this.endInterview}
                      />
                      )}
                    />
                    <Route exact path="/" render={ () => (
                      <HomePage isUserLoggedIn={ this.state.isUserLoggedIn }/>
                      )}
                    />
                    <Route exact path="/diagnosis" render={ () => (
                      <DiagnosisPage isUserLoggedIn={ this.state.isUserLoggedIn } diagnosisData={ this.state.diagnosisData }/>
                      )}
                    />
                    <Route exact path="/patient-register" render={ () => (
                      <PatientPage isUserLoggedIn={ this.state.isUserLoggedIn } patients={ this.state.patients }/>
                      )}
                    />
                </BrowserRouter>
          </div>
    );
  }
}

export default App;
