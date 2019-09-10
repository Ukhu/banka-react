import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../Signup/SignupContainer';
import CreateBankAccount from '../CreateBankAccount/CreateBankAccount';
import './app.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/new/bank-account" component={CreateBankAccount} />
    </Switch>
  </BrowserRouter>
);

export default App;
