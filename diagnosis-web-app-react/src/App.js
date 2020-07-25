import React from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import QuestPage from './components/pages/questPage';
import InterviewPage from './components/pages/interviewPage';
import Navbar from './components/pages/navBar';


class App extends React.Component {

  state = {
    token: ""
  }

  setLoginSessionToken = (token) => {
    this.setState({token})
  }
  // do stworzenia w browser router:
  //<Route exact path="/" component={ Home } />   Home do stworzenia

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Navbar token={ this.state.token }/>
            <Route path="/login" render={ () => <LoginPage setLoginSessionToken={ this.setLoginSessionToken } /> } />
            <Route path="/register" component={ RegisterPage } />
            <Route path="/quest" component={ QuestPage } />
            <Route path="/interview" component={ InterviewPage } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
