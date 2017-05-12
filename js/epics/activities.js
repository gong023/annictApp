import requestEpic from './request';
import { activitiesTypes } from './../actions/actionTypes';

export default (action$) => {
  const params = {
    action$,
    api: '/v1/activities',
    request: activitiesTypes.request_activities,
    request_success: activitiesTypes.request_activities_success,
    request_fail: activitiesTypes.request_activities_fail,
  };
  return requestEpic(params);
};
