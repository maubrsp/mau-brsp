# React Redux Universal Boilerplate

[![build status](https://img.shields.io/travis/astnt/react-redux-universal-heroku/master.svg?style=flat-square)](https://travis-ci.org/astnt/react-redux-universal-heroku)
[![Dependency Status](https://david-dm.org/astnt/react-redux-universal-heroku.svg?style=flat-square)](https://david-dm.org/astnt/react-redux-universal-heroku)
[![devDependency Status](https://david-dm.org/astnt/react-redux-universal-heroku/dev-status.svg?style=flat-square)](https://david-dm.org/astnt/react-redux-universal-heroku#info=devDependencies)
[![Demo on Heroku](https://img.shields.io/badge/demo-heroku-brightgreen.svg?style=flat-square)](https://react-redux-universal-heroku.herokuapp.com/)

Simple boilerplate with server-side rendering.

## Initial state for async

Define static method `fetchInitialComponentData` in component:

```js
export class List extends Component {

  static fetchInitialComponentData(params) {
    return fetchListIfNeeded(params); // Should return promise from here
  }
  
}
```

Then use this component in route tree:

```jsx
<Route path="/list" component={List}/>
```

And don't forget to fetch same data if component mounted at client side:

```js
export class List extends Component {

  componentDidMount() {
    const {dispatch, params} = this.props;
    dispatch(List.fetchInitialComponentData(params));
  }
  
}
```

## Deploy

This template is ready to deploy and run on Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/astnt/react-redux-universal-heroku)

## Demo

Demo available at https://react-redux-universal-heroku.herokuapp.com/