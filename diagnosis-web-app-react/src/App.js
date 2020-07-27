import React from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import QuestPage from './components/pages/questPage';
import InterviewPage from './components/pages/interviewPage';
import HomePage from './components/pages/homePage';
//import DiagnosisPage from './components/pages/diagnosisPage';
import Navbar from './components/pages/navBar';


class App extends React.Component {

  state = {
    token: ""
  }

  componentDidMount = () => {
    console.log(localStorage.token);
    console.log(sessionStorage.token);
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      this.sendSessionEndingRequest();
      event.returnValue = '';
    })
  }

  setLoginSessionToken = (token) => {
    this.setState({token})
  }

  sendSessionEndingRequest = () => {
    fetch('http://127.0.0.1:8000/users/logout/' + localStorage.token)
      .then(localStorage.clear())
      .then(sessionStorage.clear())
  }



  render() {
    return (
          <div className="App">
                <BrowserRouter>
                    <Navbar token={ this.state.token }/>
                        <Route path="/login" render={ () => <LoginPage setLoginSessionToken={ this.setLoginSessionToken } /> } />
                        <Route path="/register" component={ RegisterPage } />
                        <Route path="/quest" component={ QuestPage } />
                        <Route path="/interview" component={ InterviewPage } />
                        <Route exact path="/" component={ HomePage } />
                </BrowserRouter>
          </div>
    );
  }
}

export default App;
