import React from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import {getCookie} from './components/projectUtilities';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import QuestPage from './components/pages/questPage';
import InterviewPage from './components/pages/interviewPage';
import HomePage from './components/pages/homePage';
import Navbar from './components/pages/navBar/navBar';


class App extends React.Component {

  state = {
    token: "",
    isUserLoggedIn: false
  }

  componentDidMount = () => {
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      this.sendSessionEndingRequest();
      event.returnValue = '';
    })
  }

  changeIsUserLoggedInState = () => {
    console.log(this.state.isUserLoggedIn);
    let isLoggedIn = !this.state.isUserLoggedIn;
    this.setState({isUserLoggedIn: isLoggedIn});
  }

  setLoginSessionToken = (token) => {
    this.setState({token})
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
    return (
          <div className="App">
                <BrowserRouter>
                    <Navbar
                      token={ this.state.token }
                      isUserLoggedIn={ this.state.isUserLoggedIn }
                      changeUserState={ this.changeIsUserLoggedInState }
                    />
                    <Route path="/login" render={ () => (
                      <LoginPage
                        setLoginSessionToken={ this.setLoginSessionToken }
                        changeUserState={ this.changeIsUserLoggedInState }
                      />
                      )}
                    />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/quest" component={ QuestPage } />
                    <Route path="/interview" component={ InterviewPage } />
                    <Route exact path="/" render={ () => (
                      <HomePage isUserLoggedIn={ this.state.isUserLoggedIn }/>
                      )}
                    />
                </BrowserRouter>
          </div>
    );
  }
}

export default App;
