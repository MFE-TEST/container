import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from '../../Pages/Test';
import ReactDashboard from '../../Remotes/ReactDashboard';
import Vue3 from '../../Remotes/Vue3';
import Vue2 from '../../Remotes/Vue2';

function Router() {
  return (
    <Switch>
      <Route path="/test">
        <Test />
      </Route>
      <Route path={['/home', '/about']}>
        <ReactDashboard />
      </Route>
      <Route path={['/vue3']}>
        <Vue3 />
      </Route>
      <Route path={['/vue2']}>
        <Vue2 />
      </Route>
    </Switch>
  )
}

export default Router;
