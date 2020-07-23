import React from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import Navbar from './components/pages/navBar';


class App extends React.Component {

  state = {}

  // do stworzenia w browser router:
  //<Route exact path="/" component={ Home } />   Home do stworzenia
  //<Route exact path="/" component={ Interview } /> Interview do stworzenia

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Navbar />
            <Route path="/login" component={ LoginPage } />
            <Route path="/register" component={ RegisterPage } />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
