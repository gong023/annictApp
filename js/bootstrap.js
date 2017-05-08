import React from 'react';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore, compose } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import epics from './epics';
import reducer from './reducers';
import Routes from './containers/Router';

axios.defaults.baseURL = 'https://api.annict.com';
if (__DEV__) {
  console.disableYellowBox = true;
}

const epicMiddleware = createEpicMiddleware(epics);
const middleware = [logger, epicMiddleware];
const store = compose(applyMiddleware(...middleware))(createStore)(reducer);

const AnnictClient = () =>
  <Provider store={store}>
    <Routes />
  </Provider>;

export default AnnictClient;
