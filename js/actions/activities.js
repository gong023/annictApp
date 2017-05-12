import { activitiesTypes } from './actionTypes';

export const activitiesRequest = payload => ({
  type: activitiesTypes.request_activities,
  payload,
});
