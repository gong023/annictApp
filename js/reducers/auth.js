import { authTypes } from './../actions/actionTypes';

const initialState = { loginHtml: '', showLoginWeb: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case authTypes.request_auth_success: {
      return {
        ...state,
        loginHtml: action.data,
        showLoginWeb: true,
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

