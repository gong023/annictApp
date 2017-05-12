import { combineReducers } from 'redux';
import route from './route';
import auth from './auth';
import activities from './activities';

export default combineReducers({
  route,
  auth,
  activities,
});
