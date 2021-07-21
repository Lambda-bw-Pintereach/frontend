import React, { createContext, useState } from 'react';
import { Switch } from "react-router-dom";

import { AppContainer, Landing } from './app.style';
import './app.css';

import PrivateRoute from './components/private-route';
import Login from './components/landing/login';
import Dash from './components/dash/dash';
import pintereachApi from './api';

export const ApiContext = createContext({});
export const LoadingContext = createContext({});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [api] = useState(pintereachApi);
  const [articles, setArticles] = useState([]);
  api.init(setIsLoading, setArticles);

  return (
    <ApiContext.Provider value={{ api, articles }}>
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
