import { combineEpics } from 'redux-observable';
import * as auth from './auth';
import * as activities from './activities';

export default combineEpics(
  ...Object.values(auth),
  ...Object.values(activities),
);
