import React from 'react';
import {Router, Route} from 'react-router/umd/ReactRouter';

import {Layout} from "./components/Layout";
import {Index} from "./components/Index";
import {List} from "./components/List";

export default (
  <Router>
    <Route component={Layout}>
      <Route path="/" component={Index}/>
      <Route path="/list" component={List}/>
    </Route>
  </Router>
);