import { activitiesTypes } from './../actions/actionTypes';

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case activitiesTypes.request_activities_success:
      return {
        data: action.data.activities,
      };
    case activitiesTypes.request_activities_fail:
      console.log(action);
      return state;
    default:
      return state;
  }
};
