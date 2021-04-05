import * as actions from '../actions/index';

const initialState = {
  toggle: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_BTN:
      return { toggle: action.toggle };

    default:
      return state;
  }
};
