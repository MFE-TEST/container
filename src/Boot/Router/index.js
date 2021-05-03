import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from '../../Pages/Test';
import ReactDashboard from '../../Remotes/ReactDashboard';

function Router() {
  return (
    <Switch>
      <Route path="/test">
        <Test />
      </Route>
      <Route path={['/home', '/about']}>
        <ReactDashboard />
      </Route>
    </Switch>
  )
}

export default Router;
