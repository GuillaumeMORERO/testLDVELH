import { MESSAGE_RESET, MESSAGE_CHANGE } from './actions';

const initialState = {
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_RESET: {
      return {
        ...state,
        message: '',
      };
    }
    case MESSAGE_CHANGE: {
      return {
        ...state,
        message: action.value,
      };
    }
    default: {
      return state;
    }
  }
}