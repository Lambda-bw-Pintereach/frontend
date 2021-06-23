import React from 'react';
import { Switch } from "react-router-dom";

import { AppContainer, Landing } from './App.style';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Dash from './components/Dash';


function App() {
  return (
    <AppContainer>
      <Switch>

        <PrivateRoute path='/dash'>
          <Dash />
        </PrivateRoute>

        <Landing>
          <div className="landing-background"></div>
          <h1>pintereach</h1>
          <h2>collect your [...]</h2>
          <Login />
        </Landing>

      </Switch>
    </AppContainer>
  );
}

export default App;
