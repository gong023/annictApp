const initialState = {
  scene: 'Login',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'loginWeb':
      return {
        ...state,
        scene: action.scene,
      };
    default:
      return state;
  }
};
