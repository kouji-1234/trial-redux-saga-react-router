import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Counter from './containers/Counter';
import Content1 from './containers/Content1';
import Async from './containers/Async';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="counter" component={Counter} />
    <Route path="content1" component={Content1} />
    <Route path="async" component={Async} />
  </Route>
);
//<Route path="*" component={NotFound} />


export default routes;