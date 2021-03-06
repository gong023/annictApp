import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionConst.FOCUS:
    case ActionConst.JUMP:
      return {
        ...state,
        scene: action.state,
      };
    default:
      return state;
  }
};
