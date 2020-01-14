import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import {
  LoginPage,
  HomePage,
  CreatePoPage,
  CalendarPage,
  OtherPage
} from './page'

const App = () => {
  return (
    <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/createPo">
          <CreatePoPage />
        </Route>
        <Route path="/calendar">
          <CalendarPage />
        </Route>
        <Route path="/other">
          <OtherPage />
        </Route>
      </Switch>
  );
}

export default App;
