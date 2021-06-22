import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import AddArticle from './components/AddArticle';
import Signup from './components/Signup';
import { AppContainer, Landing } from './App.style';
import Login from './components/Login';

function App() {
  return (
    <AppContainer>
      {/* <header className="App-header">
        Pintereach
      </header> */}

      <Switch>
        <Route path="/" exact>
          <Landing>
            <div className="landing-background"></div>
            <h1>pintereach</h1>
            <h2>collect your [...]</h2>
            <Login />
          </Landing>
        </Route>

        <Route path='/addarticle'>
          <AddArticle />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
