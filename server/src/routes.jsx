import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Body from './Body';

function Test() {
  return (
    <div>Hi Testing!</div>
  );
}

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Body} />
      <Route path="/test" component={Test} />
    </Switch>
  );
}

export default Routes;
