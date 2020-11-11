/**
 * @description router !
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dance from 'views/dance';
import Home from 'views/home';

const AppRouter = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dance" component={Dance} />
      <Redirect path="*" to="/" />
    </Switch>
  </>
);

export default AppRouter;
