import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import AddArticle from './components/AddArticle';
import Signup from './components/Signup';
import { AppContainer, Landing } from './App.style';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dash from './components/Dash';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <AppContainer>
      {/* <header className="App-header">
        Pintereach
      </header> */}

      <Switch>


        <Route path='/signup'>
          <Signup />
        </Route>

        <PrivateRoute path='/dash'>
          <Dash/>
        </PrivateRoute>

        <Route path="/" exact>
          <Landing>
            <div className="landing-background"></div>
            <h1>pintereach</h1>
            <h2>collect your [...]</h2>
            <Login />
          </Landing>
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
