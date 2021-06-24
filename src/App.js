import React, { createContext, useState } from 'react';
import { Switch } from "react-router-dom";

import { AppContainer, Landing } from './App.style';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Dash from './components/Dash';
import { PintereachApi } from './api';

export const ApiContext = createContext({});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // const [api, setApi] = useState(new PintereachApi(setIsLoading));
  const api = new PintereachApi(setIsLoading);

  return (
    <ApiContext.Provider value={{ isLoading, api }}>

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

    </ApiContext.Provider>
  );
}

export default App;
