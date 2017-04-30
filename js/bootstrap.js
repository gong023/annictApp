import React from 'react';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import App from './containers/App';
import epics from './epics';
import reducer from './reducers';

const epicMiddleware = createEpicMiddleware(epics);

const configureStore = () => (createStore(reducer, applyMiddleware(epicMiddleware)));

const AnnictClient = () =>
  <Provider store={configureStore()}>
    <App />
  </Provider>;

export default AnnictClient;
