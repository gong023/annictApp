import requestEpic from './request';
import { authTypes } from './../actions/actionTypes';

export const requestAuthorize = (action$) => {
  const params = {
    action$,
    api: '/oauth/authorize',
    request: authTypes.request_auth,
    request_success: authTypes.request_success,
    request_fail: authTypes.request_fail,
  };
  return requestEpic(params);
};

export const requestToken = (action$) => {
  const params = {
    action$,
    api: '/oauth/token',
    request: authTypes.request_token,
    request_success: authTypes.request_success,
    request_fail: authTypes.request_fail,
  };
  return requestEpic(params);
};
