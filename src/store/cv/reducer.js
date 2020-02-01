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
  switch (action.value) {
    case 1: {
      return { ...state, 1: true };
    }
    case 2: {
      return { ...state, 2: true };
    }
    case 3: {
      return { ...state, 3: true };
    }
    case 4: {
      return { ...state, 4: true };
    }
    case 5: {
      return { ...state, 5: true };
    }
    case 6: {
      return { ...state, 6: true };
    }
    default: {
      return state;
    }
  }
}