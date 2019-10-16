import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import CreateAccount from './views/CreateAccount';
import Account from './views/Account';
import Login from './views/Login';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route path="/create-account" component={CreateAccount} />
    <Route path="/signup" component={Signup} />
    <Route path="/account" component={Account} />
  </Switch>
);
