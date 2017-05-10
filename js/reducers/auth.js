import { authTypes } from './../actions/actionTypes';

export default (state = { token: null }, action) => {
  switch (action.type) {
    case authTypes.request_token_success:
      return {
        token: action.data.access_token,
      };
    default:
      return state;
  }
};

