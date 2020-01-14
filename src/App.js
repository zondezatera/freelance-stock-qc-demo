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
  OtherPage,
  DailyPage
} from './page'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/createPo" component={CreatePoPage} />
      <Route exact path="/calendar" component={CalendarPage}/>
      <Route exact path="/daily" component={DailyPage} />
      <Route exact path="/other" component={OtherPage} />
    </Switch>
  );
}

export default App;
