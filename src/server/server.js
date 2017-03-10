import Express from 'express'
import BodyParser from 'body-parser'

import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';

import {Provider} from 'react-redux'

import {match, RouterContext} from 'react-router';

import routes from "../common/routes";

import configureStore from "../common/store/configureStore";
import {PORT} from "../common/constants";


const app = new Express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.development.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(Express.static('public'));
}

app.use(BodyParser.json());

app.use('/api/list', (req, res, next) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify([
    {id: 1, text: 'List Item'},
    {id: 2, text: 'Another List Item'},
    {id: 3, text: 'Yet Another List Item'},
  ]));
});

app.use(function (req, res) {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const store = configureStore({});
      Promise.all(
        renderProps.components
          .filter(component => component && component.fetchInitialComponentData)
          .map(component => store.dispatch(component.fetchInitialComponentData(renderProps.params)))
      ).then(result => {
        res.send(renderFullPage(store, renderProps, req));
      }).catch(error => {
        res.status(500).send(error.message);
      });

    } else {
      res.status(404).send('Not found');
    }
  });
});

function renderFullPage(store, renderProps, req, title = 'React Redux Universal') {
  const html = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );

  return `${'<!doctype html>'}<html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};
      </script>
      <script async src="/static/bundle.js"></script>
    </body>
  </html>`;
}

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Listening on port ${PORT}...`);
  }
});