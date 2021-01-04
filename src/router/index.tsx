import React from 'react';
import { Switch, Route } from 'react-router-dom';

import albums from '../pages/albums';
import Posts from '../pages/Posts';
import todos from '../pages/todos/todos';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Posts} />
    <Route path="/albums" component={albums} />
    <Route path="/todos" component={todos} />
  </Switch>
);

export default Routes;
