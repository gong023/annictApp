import { combineEpics } from 'redux-observable';
import * as auth from './auth';
import * as activities from './activities';
import * as me from './me';

export default combineEpics(
  ...Object.values(auth),
  ...Object.values(activities),
  ...Object.values(me),
);
