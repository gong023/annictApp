import requestEpic from './request';
import { authTypes } from './../actions/actionTypes';

export default (action$) => {
  const params = {
    action$,
    api: '/oauth/token',
    request: authTypes.request_token,
    request_success: authTypes.request_token_success,
    request_fail: authTypes.request_token_fail,
  };
  return requestEpic(params, 'post');
};
