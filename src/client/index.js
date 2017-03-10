import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {applyRouterMiddleware, browserHistory, Router} from 'react-router';
import {useScroll} from 'react-router-scroll';

import {syncHistoryWithStore} from 'react-router-redux'

import routes from '../common/routes'
import configureStore from '../common/store/configureStore'

const store = configureStore(window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);


render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
      render={applyRouterMiddleware(useScroll((prevRouterProps, {routes, location}) => {
        if (location.action === 'POP') {
          return true;
        }
        if (routes.some(route => route.ignoreScrollBehavior)) {
          return false;
        }
        if (routes.some(route => route.scrollToTop)) {
          return [0, 0];
        }
        return true;
      }))}/>
  </Provider>
  ,
  document.getElementById('app')
);