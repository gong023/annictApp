import { authTypes } from './../actions/actionTypes';

export default (state = { loginUrl: '' }, action) => {
  switch (action.type) {
    case authTypes.request_token_success: {
      const loginUrl = action.data.match(/https:\/\/api.annict.com.+">/)[0].replace(/">$/, '');
      return {
        loginUrl,
      };
    }
    case authTypes.request_token_fail: {
      return {
        error: true,
      };
    }
    default:
      return state;
  }
};

