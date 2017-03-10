import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'

import rootReducer from '../reducers'
import {readyStatePromise, loggerMiddleware} from './storeMiddleware'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    resolveMiddleware()
  );
  
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}

function resolveMiddleware() {
  if (process.env.NODE_ENV === 'development' && process.env.BROWSER) {
    return applyMiddleware(
      thunkMiddleware,
      readyStatePromise,
      routerMiddleware(browserHistory),
      loggerMiddleware,
    )
  } else {
    return applyMiddleware(
      thunkMiddleware,
      readyStatePromise,
      routerMiddleware(browserHistory),
    )
  }
}