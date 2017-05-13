import requestEpic from './request';
import { meTypes } from './../actions/actionTypes';

export default (action$) => {
  const params = {
    action$,
    api: '/v1/me',
    request: meTypes.request_me,
    request_success: meTypes.request_me_success,
    request_fail: meTypes.request_me_fail,
  };
  return requestEpic(params);
};
