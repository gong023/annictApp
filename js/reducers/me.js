import { meTypes } from './../actions/actionTypes';

const initialState = {
  username: '',
  description: '',
  avatar_url: '',
  background_image_url: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case meTypes.request_me_success: {
      const { username, description, avatar_url, background_image_url } = action.data;
      return {
        ...state,
        username,
        description,
        avatar_url,
        background_image_url,
      };
    }
    default: {
      return state;
    }
  }
};
