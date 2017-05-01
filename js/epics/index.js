import { combineEpics } from 'redux-observable';
import * as auth from './auth';

export default combineEpics(
  ...Object.values(auth),
);
