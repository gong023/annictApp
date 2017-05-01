import React from 'react';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import App from './containers/App';
import epics from './epics';
import reducer from './reducers';

axios.defaults.baseURL = 'https://api.annict.com';

const epicMiddleware = createEpicMiddleware(epics);
const middleware = [logger, epicMiddleware];
const store = () => createStore(reducer, applyMiddleware(...middleware));

const AnnictClient = () =>
  <Provider store={store()}>
    <App />
  </Provider>;

export default AnnictClient;
