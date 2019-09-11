import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../Signup/SignupContainer';
import CreateBankAccount from '../CreateBankAccount/CreateBankAccount';
import UserDashboard from '../UserDashboard/UserDashboard';
import './app.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/new/bank-account" component={CreateBankAccount} />
      <Route exact path="/dashboard" component={UserDashboard} />
      <Route render={() => window.history.back()} />
    </Switch>
  </BrowserRouter>
);

export default App;
