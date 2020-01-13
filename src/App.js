import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './feature/login'
import HomePage from './feature/home'

const App = () => {
  return (
    <div className="container">
      <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
