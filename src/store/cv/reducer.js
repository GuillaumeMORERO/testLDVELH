import { CHANGE_STATUS } from './actions';

const initialState = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS: {
      return { ...state, [action.value]: true };
    }
    default: {
      return state;
    }
  }
}