/**
 * @description router !
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SmallTabletWidth, DeskTopWidth } from 'theme/width';
import Dance from 'views/dance';
import Home from 'views/home';

const AppRouter = () => (
  <div style={Outer}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dance" component={Dance} />
      <Redirect path="*" to="/" />
    </Switch>
  </div>
);

export default AppRouter;

const Outer = {
  minWidth: DeskTopWidth,
  minHeight: SmallTabletWidth,
  width: '100vw',
  height: '100vh',
  margin: '0 auto',
  backgroundColor: 'rgba(0,0,0,0.05)',
};
