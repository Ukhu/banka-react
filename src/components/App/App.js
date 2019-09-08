import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../Signup/SignupContainer';
import './app.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignupPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
