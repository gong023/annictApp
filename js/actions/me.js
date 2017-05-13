import { meTypes } from './actionTypes';

export const meRequest = payload => ({
  type: meTypes.request_me,
  payload,
});
