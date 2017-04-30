import { authTypes } from './actionTypes';

export const authRequest = payload => ({
  type: authTypes.request_auth,
  payload,
});

export const tokenRequest = payload => ({
  type: authTypes.request_token,
  payload,
});
