import { combineReducers } from 'redux';
import route from './route';
import auth from './auth';

export default combineReducers({
  route,
  auth,
});
