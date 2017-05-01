import { authTypes } from './../actions/actionTypes';

export default (state = { accessToken: '' }, action) => {
  switch (action.type) {
    case authTypes.request_token_success:
      return {
        accessToken: action.data.accessToken,
      };
    case authTypes.request_token_fail:
      return {
        error: true,
      };
    default:
      return state;
  }
};

