/**
 * @description router !
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from 'views/home';

const AppRouter = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect path="*" to="/" />
    </Switch>
  </>
);

export default AppRouter;
