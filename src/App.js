import React, { createContext, useState } from 'react';
import { Switch } from "react-router-dom";

import { AppContainer, Landing } from './App.style';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Dash from './components/Dash';
import pintereachApi from './api';

export const ApiContext = createContext({});
export const LoadingContext = createContext({});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [api] = useState(pintereachApi);
  api.init(setIsLoading);
  //const api = PintereachApi();

  return (
    <ApiContext.Provider value={{ api }}>
      <LoadingContext.Provider value={{ isLoading }}>

        <AppContainer>
          <Switch>

            <PrivateRoute path='/dash'>
              <Dash />
            </PrivateRoute>

            <Landing>
              <div className="landing-background"></div>
              <h1>Pintereach</h1>
              <h2>collect your [...]</h2>
              <Login />
            </Landing>

          </Switch>
        </AppContainer>

      </LoadingContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
