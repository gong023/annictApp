import { ActionConst } from 'react-native-router-flux';
import { authTypes } from './../actions/actionTypes';
import routeReducer from './route';

export default (state = { loginHtml: '' }, action) => {
  switch (action.type) {
    case authTypes.request_auth_success: {
      return {
        ...state,
        loginHtml: action.data,
        route: routeReducer(ActionConst.FOCUS, action),
      };
    }
    case authTypes.request_auth_fail: {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
};

