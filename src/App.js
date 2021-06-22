import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import AddArticle from './components/AddArticle';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Pintereach
      </header>
      <Switch>
        <Route path='/addarticle'>
          <AddArticle />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
