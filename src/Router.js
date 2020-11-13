/**
 * @description router !
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SmallTabletWidth, DeskTopWidth } from 'theme/width';

import Intro from 'views/intro';
import List from 'views/list';
import Dance from 'views/dance';
import Result from 'views/result';

const AppRouter = () => (
  <div style={Outer}>
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/list" component={List} />
      <Route exact path="/dance" component={Dance} />
      <Route exact path="/result" component={Result} />
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
