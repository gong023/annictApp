import { authTypes } from './actionTypes';

export const tokenRequest = payload => ({
  type: authTypes.request_token,
  payload,
});
